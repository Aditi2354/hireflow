import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";

const FALLBACK = {
  "frontend developer": [
    { q: "What is hydration in Next.js?", a: "Server-rendered HTML becomes interactive when React attaches event listeners on the client." },
    { q: "What causes a React re-render?", a: "State/props change, context change, or parent re-render." },
    { q: "Explain reconciliation and keys.", a: "React diffs children and uses keys to match previous and next tree nodes efficiently." },
    { q: "How do you prevent layout shift (CLS)?", a: "Reserve dimensions, use next/image, preload fonts, avoid late DOM injections." },
    { q: "CSR vs SSR vs SSG vs ISR?", a: "CSR: render on client; SSR: on request; SSG: build time; ISR: SSG + periodic revalidation." },
    // ...add more defaults if no LLM key (we’ll still extend to 20 programmatically)
  ]
};

async function genWithGemini(role, count) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;

  const prompt = `Generate ${count} interview questions for role "${role}".
Return JSON array like:
[{"q": "question1", "a": "short answer 1"}, ...] 
Answers must be concise (1–3 lines).`;

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + key, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  }).then(r => r.json());

  const text = res?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  try { return JSON.parse(text); } catch { return null; }
}

async function genWithOpenAI(role, count) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  const body = {
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: "You are an interview coach. Reply strictly as JSON." },
      { role: "user", content: `Generate ${count} interview questions for role "${role}" with concise answers (1–3 lines). Return {"items":[{"q":"...","a":"..."}]}` }
    ]
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", "authorization": `Bearer ${key}` },
    body: JSON.stringify(body)
  }).then(r => r.json());

  const text = res?.choices?.[0]?.message?.content || "";
  try {
    const obj = JSON.parse(text);
    return obj?.items || null;
  } catch { return null; }
}

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const role = (searchParams.get("role") || "frontend developer").toLowerCase();
  const count = Math.min(parseInt(searchParams.get("count") || "20", 10), 30);

  // Try Gemini → OpenAI → Fallback
  let items = await genWithGemini(role, count);
  if (!items) items = await genWithOpenAI(role, count);

  if (!items) {
    const base = FALLBACK[role] || FALLBACK["frontend developer"];
    const out = [];
    while (out.length < count) out.push(base[out.length % base.length]);
    return NextResponse.json({ items: out });
  }

  // Normalize shape
  const normalized = items.map(x => ({
    q: x.q || x.question || "Untitled question",
    a: x.a || x.answer || ""
  }));

  return NextResponse.json({ items: normalized.slice(0, count) });
}

// app/api/interview/route.js
import { NextResponse } from "next/server";

// ---------- helpers ----------
const normalize = (s = "") =>
  s.toLowerCase().replace(/\s+/g, " ").replace(/[^\p{L}\p{N} ]/gu, "").trim();

function dedupe(items) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    if (!it?.q) continue;
    const key = normalize(it.q).slice(0, 120); // avoid overly long keys
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ q: it.q.trim(), a: (it.a || "").trim() });
  }
  return out;
}

function safeJsonParse(txt) {
  try {
    const data = JSON.parse(txt);
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.questions)) return data.questions;
  } catch {}
  return null;
}

// A compact topic bank we can template for *any* role
function bank(role = "software engineer") {
  const R = role;
  const items = [
    { q: `Explain your approach to ${R} system design.`, a: "Start with requirements → constraints → components → data → scale → security → trade‑offs." },
    { q: `Common pitfalls in ${R}?`, a: "Weak testing, poor observability, over‑engineering, ignoring perf & security." },
    { q: `How do you handle on‑call and incident response as a ${R}?`, a: "Runbooks, alerts, blameless postmortems, action items, timelines." },
    { q: `Performance tuning checklist for a ${R}?`, a: "Measure, profile, fix hot paths, cache, reduce I/O, async where safe." },
    { q: `Security practices you follow as a ${R}?`, a: "Least privilege, secret mgmt, input validation, deps scanning, patching, audits." },
    { q: `Design a rate limiter for an API a ${R} owns.`, a: "Token bucket in Redis; per‑user + global keys; TTLs; idempotency on writes." },
    { q: `Explain CAP theorem with a real system you built as a ${R}.`, a: "Pick C or A under partition; e.g., CP for money, AP for feeds." },
    { q: `Caching layers & invalidation strategies a ${R} should use.`, a: "CDN, app, DB caches; SWR/TTL; tag invalidation; cache‑aside vs write‑through." },
    { q: `Idempotency in APIs a ${R} designs.`, a: "Use idempotency keys; PUT semantics; dedupe windows; retries are safe." },
    { q: `Backpressure handling a ${R} would add in pipelines.`, a: "Bounded queues, rate limiting, drop/degenerate modes, circuit‑breakers." },
    { q: `Event‑driven vs request/response for a ${R}.`, a: "Async decoupling, retries & DLQs vs simpler semantics & latency guarantees." },
    { q: `How do you do schema migrations safely as a ${R}?`, a: "Expand/contract, dual‑write if needed, back‑fills, feature flags, rollout." },
    { q: `Feature flags best practices for a ${R}.`, a: "Gradual rollouts, kill switches, per‑segment toggles, experiment hygiene." },
    { q: `Blue/green vs canary deploys for a ${R}.`, a: "Blue/green: instant switch; Canary: progressive + metrics guardrails." },
    { q: `Retries & timeouts a ${R} should set by default.`, a: "Exponential backoff + jitter; context timeouts; dead‑letter queues." },
    { q: `How do you measure success of a ${R}'s service?`, a: "SLIs/SLOs, latency, error rate, saturation, business KPIs." },
    { q: `Data partitioning strategies a ${R} might choose.`, a: "Hash/range/geo; consider hotspots, rebalancing, cross‑shard queries." },
    { q: `Consistency models a ${R} works with.`, a: "Strong, eventual, causal; explain trade‑offs with examples." },
    { q: `Observability stack a ${R} should set up.`, a: "Structured logs, metrics, traces; exemplars; correlation IDs." },
    { q: `Debugging production issues as a ${R}.`, a: "Triage with dashboards/logs/traces; isolate scope; create minimal repro." },
    { q: `Pagination & filtering best practices for a ${R}.`, a: "Keyset pagination over offset; stable sort keys; consistent filters." },
    { q: `When to use queues/streams as a ${R}?`, a: "Buffer bursts, async work, fan‑out, ordering needs, scalable consumers." },
    { q: `Designing search for a ${R}.`, a: "Inverted indexes, analyzers, scoring; denormalizations; freshness vs cost." },
    { q: `Protecting PII data as a ${R}.`, a: "Tokenization, encryption at rest/flight, RBAC/ABAC, audits." },
    { q: `Testing strategy a ${R} uses.`, a: "Fast unit, integration with fakes, contract tests, canaries, chaos experiments." },
    { q: `Graceful degradation a ${R} should implement.`, a: "Serve cached/stale, read‑only mode, reduced features under stress." },
    { q: `Transactions & outbox pattern a ${R} would use.`, a: "Use outbox for atomic write + publish to avoid dual‑write bugs." },
    { q: `Hot/warm/cold storage tiers a ${R} might choose.`, a: "Latency/cost trade‑offs; lifecycle rules; compliance & retention." },
    { q: `API versioning strategy for a ${R}.`, a: "Backwards compatible changes, deprecations, sunset headers, OpenAPI." },
    { q: `Pitfalls in async jobs a ${R} should avoid.`, a: "At‑least‑once delivery → idempotency; retries storms; poison messages." },
  ];
  return items;
}

function padToTwenty(items, role) {
  const wanted = 20;
  if (items.length >= wanted) return items.slice(0, wanted);
  const b = bank(role);
  const pool = [...b]; // shallow copy
  // Dedup against existing
  const seen = new Set(items.map((x) => normalize(x.q)));
  const out = [...items];
  for (const it of pool) {
    if (out.length >= wanted) break;
    if (!seen.has(normalize(it.q))) {
      out.push(it);
      seen.add(normalize(it.q));
    }
  }
  return out.slice(0, wanted);
}

function modelPrompt(role) {
  return `
You are generating interview practice content.

Return STRICT JSON (no prose) as an array of 20 objects:
[
  {"q": "<question 1>", "a": "<concise answer 1>"},
  ...
]

Guidelines:
- Focus on the role: "${role}".
- Short, technically dense answers (1–2 lines).
- No numbering, no markdown, no duplicate questions, no repeat topics.
- Mix: system design, performance, security, testing, data, ops, reliability, etc.
`;
}

// ---------- route ----------
export async function POST(req) {
  try {
    const { role = "" } = await req.json();
    const R = (role || "software engineer").toLowerCase();

    let out = [];

    // 1) Try OpenAI if available
    if (process.env.OPENAI_API_KEY) {
      try {
        const { default: OpenAI } = await import("openai");
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const prompt = modelPrompt(R);

        // Use a lightweight model
        const resp = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          temperature: 0.7,
          messages: [{ role: "user", content: prompt }],
        });

        const txt =
          resp?.choices?.[0]?.message?.content?.trim() ?? "[]";

        const parsed = safeJsonParse(txt);
        if (parsed) out = parsed;
      } catch (_) {}
    }

    // 2) Try Gemini if OpenAI failed
    if (out.length === 0 && process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenerativeAI } = await import("@google/generative-ai");
        const gen = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = gen.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prm = modelPrompt(R);
        const resp = await model.generateContent(prm);
        const txt = resp?.response?.text?.() ?? "[]";
        const parsed = safeJsonParse(txt);
        if (parsed) out = parsed;
      } catch (_) {}
    }

    // 3) Fallback to our local bank (and/or supplement if < 20)
    if (!Array.isArray(out) || out.length === 0) {
      out = bank(R);
    }

    // sanitize → dedupe → pad to 20
    out = out
      .map((x) => ({ q: String(x.q || "").trim(), a: String(x.a || "").trim() }))
      .filter((x) => x.q.length > 0);

    out = dedupe(out);
    out = padToTwenty(out, R);

    return NextResponse.json({ questions: out }, { status: 200 });
  } catch (e) {
    console.error("Interview API error:", e);
    // last-resort minimal fallback
    const fallback = padToTwenty(dedupe(bank("engineer")), "engineer");
    return NextResponse.json({ questions: fallback, error: "fallback" }, { status: 200 });
  }
}

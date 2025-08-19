const bank = {
  "backend": [
    "Explain event loop and how Node.js handles concurrency.",
    "Design a REST API for a todo service. Discuss auth and rate-limits.",
    "What is a memory leak in Node? How do you detect and fix it?",
    "Compare SQL vs NoSQL for an analytics feature you built.",
    "Walk through your production debugging process."
  ],
  "frontend": [
    "Explain React reconciliation and keys.",
    "How would you optimize a slow React list?",
    "What is hydration in Next.js?",
    "Compare CSR, SSR, SSG and ISR trade-offs.",
    "How do you prevent layout shift and jank?"
  ],
  "devops": [
    "Design a CI/CD pipeline for a monorepo.",
    "Blue-green vs rolling deploys — pros/cons?",
    "How would you containerize a Next.js app?",
    "What metrics/alerts do you set for uptime?",
    "Explain IaC benefits and risks."
  ]
};
export async function POST(req){
  const { role = "" } = await req.json();
  const r = role.toLowerCase();
  let bucket = "backend";
  if(r.includes("front")) bucket = "frontend";
  if(r.includes("devops") || r.includes("sre")) bucket = "devops";
  return new Response(JSON.stringify({ role, questions: bank[bucket] || bank.backend }), { headers: { "content-type": "application/json" } });
}

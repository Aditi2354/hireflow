export const NEXTJS_QA = [
  // EASY
  {id:"nx-e1",level:"easy",topic:"Routing",q:"Pages vs App Router?",a:"Pages (file‑based pages/SSR) vs App (layouts, server components)."},
  {id:"nx-e2",level:"easy",topic:"Data",q:"getStaticProps vs getServerSideProps?",a:"Build‑time static vs request‑time server render."},
  {id:"nx-e3",level:"easy",topic:"Static",q:"ISR idea?",a:"Regenerate static pages on interval or on‑demand revalidate."},
  {id:"nx-e4",level:"easy",topic:"Assets",q:"next/image benefits?",a:"Optimization, responsive sizes, lazy loading."},
  {id:"nx-e5",level:"easy",topic:"Link",q:"next/link vs a?",a:"Client navigation with prefetching vs full reload."},
  {id:"nx-e6",level:"easy",topic:"Env",q:"Public env vars?",a:"NEXT_PUBLIC_* exposed to client."},
  {id:"nx-e7",level:"easy",topic:"Styles",q:"CSS modules?",a:"Locally scoped class names per component."},
  {id:"nx-e8",level:"easy",topic:"API",q:"API routes use?",a:"Serverless functions co‑located with app."},
  {id:"nx-e9",level:"easy",topic:"Meta",q:"Head management?",a:"Metadata API/App router or next/head in Pages."},
  {id:"nx-e10",level:"easy",topic:"Intl",q:"i18n routing?",a:"Locales with domain/subpath routing."},

  // MEDIUM
  {id:"nx-m1",level:"medium",topic:"RSC",q:"Server vs Client components?",a:"Server defaults; client marked 'use client' for interactivity."},
  {id:"nx-m2",level:"medium",topic:"Caching",q:"fetch cache options?",a:"force-cache, no-store, revalidate seconds, tags."},
  {id:"nx-m3",level:"medium",topic:"Mutations",q:"Server actions?",a:"Run on server with 'use server'; mutate securely."},
  {id:"nx-m4",level:"medium",topic:"Edge",q:"Edge runtime?",a:"V8 isolates at edge; limited APIs, fast cold starts."},
  {id:"nx-m5",level:"medium",topic:"Images",q:"Static imports vs remote loader?",a:"Build‑time vs runtime optimization with domain allowlist."},
  {id:"nx-m6",level:"medium",topic:"Auth",q:"NextAuth in App router?",a:"Route handler exports {GET,POST}; SessionProvider on client."},
  {id:"nx-m7",level:"medium",topic:"SEO",q:"Sitemap/robots?",a:"Route handlers under /app for dynamic generation."},
  {id:"nx-m8",level:"medium",topic:"Middleware",q:"Common use cases?",a:"Auth gates, rewrites/redirects, A/B."},
  {id:"nx-m9",level:"medium",topic:"Bundle",q:"Reduce client JS?",a:"RSC, dynamic import, tree‑shaking, avoid client marks."},
  {id:"nx-m10",level:"medium",topic:"ISR",q:"On‑demand revalidate?",a:"POST to route calling revalidateTag/path."},

  // HARD
  {id:"nx-h1",level:"hard",topic:"Perf",q:"Streaming & Suspense?",a:"Progressively send server HTML; suspense boundaries fill later."},
  {id:"nx-h2",level:"hard",topic:"Data",q:"Tag‑based cache invalidation?",a:"fetch({ next:{ tags:['k'] }}) then revalidateTag('k')."},
  {id:"nx-h3",level:"hard",topic:"Security",q:"RSC security model?",a:"No client secrets; code runs on server; only serialized props."},
  {id:"nx-h4",level:"hard",topic:"Interop",q:"Using Zustand/Redux with RSC?",a:"Keep state in client components; prop drill minimal data."},
  {id:"nx-h5",level:"hard",topic:"Edge",q:"When not to use Edge?",a:"Large Node APIs/SDKs, heavy CPU, need sockets/fs."},
  {id:"nx-h6",level:"hard",topic:"Routing",q:"Parallel/Intercepted routes?",a:"Render multiple route segments; intercept for modals."},
  {id:"nx-h7",level:"hard",topic:"Images",q:"CDN + next/image pitfalls?",a:"Cache keys, remote patterns, loader conflicts."},
  {id:"nx-h8",level:"hard",topic:"Data",q:"Race conditions in server actions?",a:"Use transactions/locks; idempotency keys."},
  {id:"nx-h9",level:"hard",topic:"Deploy",q:"Vercel vs self‑host trade‑offs?",a:"DX/edge vs control/cost/custom infra."},
  {id:"nx-h10",level:"hard",topic:"Testing",q:"E2E with App router?",a:"Playwright or Cypress; mock NextAuth and network."},
];

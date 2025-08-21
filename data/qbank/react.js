export const REACT_QA = [
  // EASY
  {id:"react-e1", level:"easy", topic:"JSX", q:"What is JSX?", a:"Syntax sugar that transpiles to React.createElement calls."},
  {id:"react-e2", level:"easy", topic:"State", q:"useState basics?", a:"Stateful value + setter, triggers re-render on change."},
  {id:"react-e3", level:"easy", topic:"Props", q:"Props vs state?", a:"Props read-only inputs; state is local, mutable via setState/useState."},
  {id:"react-e4", level:"easy", topic:"Lists", q:"Why keys?", a:"Stable identity for diffing; avoid index in dynamic lists."},
  {id:"react-e5", level:"easy", topic:"Effects", q:"useEffect when?", a:"Sync with external systems (DOM, subscriptions, fetch)."},
  {id:"react-e6", level:"easy", topic:"Refs", q:"useRef purpose?", a:"Mutable container persists across renders without causing re-render."},
  {id:"react-e7", level:"easy", topic:"Events", q:"Synthetic events?", a:"Wrapped browser events for cross-browser consistency."},
  {id:"react-e8", level:"easy", topic:"Forms", q:"Controlled vs uncontrolled?", a:"Controlled via state; uncontrolled via refs/defaultValue."},
  {id:"react-e9", level:"easy", topic:"Conditional", q:"Conditional rendering patterns?", a:"Ternary, &&, early returns, component branching."},
  {id:"react-e10", level:"easy", topic:"Composition", q:"Children vs props pattern?", a:"Compose components by passing UI/behavior via props/children."},

  // MEDIUM
  {id:"react-m1", level:"medium", topic:"Memo", q:"useMemo vs useCallback?", a:"useMemo caches a value; useCallback caches a function."},
  {id:"react-m2", level:"medium", topic:"Context", q:"When to use Context?", a:"Avoid prop drilling for global-ish data."},
  {id:"react-m3", level:"medium", topic:"Suspense", q:"Suspense for data?", a:"Show fallback while data/async boundary resolves."},
  {id:"react-m4", level:"medium", topic:"Error", q:"Error boundaries?", a:"Catch render errors in subtree; show fallback UI."},
  {id:"react-m5", level:"medium", topic:"Routing", q:"Client vs server routing trade-offs?", a:"Client: smooth, bundle cost; Server: SEO/TTFB, reloads less interactive."},
  {id:"react-m6", level:"medium", topic:"Perf", q:"Avoid re-render storms?", a:"Memo child, stable deps, split state, key wisely."},
  {id:"react-m7", level:"medium", topic:"Keys", q:"Index as key pitfalls?", a:"Breaks identity on reorder; causes state bugs."},
  {id:"react-m8", level:"medium", topic:"SSR", q:"Hydration mismatch causes?", a:"Non-deterministic markup: time/random, conditional browser-only code."},
  {id:"react-m9", level:"medium", topic:"Testing", q:"RTL best practice?", a:"Test behavior not implementation; use screen/findBy*."},
  {id:"react-m10", level:"medium", topic:"CSS", q:"CSS-in-JS vs utility classes?", a:"DX vs bundle/runtime trade-offs; pick per team constraints."},

  // HARD
  {id:"react-h1", level:"hard", topic:"Reconciliation", q:"How does diffing work?", a:"O(n) heuristics: type/keys guide subtree reuse/recreate."},
  {id:"react-h2", level:"hard", topic:"Concurrent", q:"What is concurrent rendering?", a:"Interruptible work, priorities; better responsiveness."},
  {id:"react-h3", level:"hard", topic:"Transitions", q:"useTransition use case?", a:"Mark state updates as non-urgent; keep input responsive."},
  {id:"react-h4", level:"hard", topic:"Server", q:"Server Components benefit?", a:"Smaller client bundles, secure data access on server."},
  {id:"react-h5", level:"hard", topic:"Forms", q:"Headless UI pattern?", a:"Provide logic via hooks/context; consumer renders UI."},
  {id:"react-h6", level:"hard", topic:"State", q:"Local vs global state split?", a:"Collocate; lift only when needed; avoid overusing global stores."},
  {id:"react-h7", level:"hard", topic:"Virtualization", q:"When to virtualize lists?", a:"Large lists to reduce DOM nodes; windowing libraries."},
  {id:"react-h8", level:"hard", topic:"i18n", q:"Hydration with different locales?", a:"Pre-render locale content server-side; avoid client-only changes pre-hydration."},
  {id:"react-h9", level:"hard", topic:"Accessibility", q:"Key a11y rules?", a:"Semantic HTML, labels, focus, roles, ARIA only when needed."},
  {id:"react-h10", level:"hard", topic:"Architecture", q:"Microfrontends trade-offs?", a:"Team autonomy vs complexity, duplication, perf boundaries."},
];

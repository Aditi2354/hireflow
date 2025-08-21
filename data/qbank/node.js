export const NODE_QA = [
  // EASY
  {id:"node-e1", level:"easy", topic:"Runtime", q:"What is Node.js?", a:"V8-based JavaScript runtime with libuv for async I/O."},
  {id:"node-e2", level:"easy", topic:"Modules", q:"CommonJS vs ESM?", a:"CJS=require/module.exports, ESM=import/export; different resolution/semantics."},
  {id:"node-e3", level:"easy", topic:"NPM", q:"Dev vs prod dependencies?", a:"dev used in development; prod required at runtime."},
  {id:"node-e4", level:"easy", topic:"Env", q:"How to read env vars?", a:"process.env.MY_VAR (with dotenv or platform config)."},
  {id:"node-e5", level:"easy", topic:"HTTP", q:"Express middleware order?", a:"Order matters; run top->bottom."},
  {id:"node-e6", level:"easy", topic:"Logs", q:"Why structured logs?", a:"Machine-parsable JSON; better search/alerts."},
  {id:"node-e7", level:"easy", topic:"Errors", q:"Synchronous vs async errors?", a:"Use try/catch for sync; Promise.catch or async/await try/catch for async."},
  {id:"node-e8", level:"easy", topic:"Streams", q:"Readable vs writable?", a:"Readable emits data; writable accepts data."},
  {id:"node-e9", level:"easy", topic:"PM2", q:"What is PM2?", a:"Process manager with clustering, restart, logs."},
  {id:"node-e10", level:"easy", topic:"Security", q:"Helmet use?", a:"Sets security-related HTTP headers in Express."},

  // MEDIUM
  {id:"node-m1", level:"medium", topic:"Async", q:"Event loop phases?", a:"Timers, pending callbacks, idle/prepare, poll, check, close callbacks."},
  {id:"node-m2", level:"medium", topic:"Cluster", q:"Why cluster?", a:"Use multiple processes to utilize multi-core CPUs."},
  {id:"node-m3", level:"medium", topic:"Perf", q:"Detect blocking code?", a:"clinic/0x/pprof; check long CPU work; move to worker threads."},
  {id:"node-m4", level:"medium", topic:"Workers", q:"When worker_threads?", a:"CPU-bound tasks; offload from main event loop."},
  {id:"node-m5", level:"medium", topic:"Storage", q:"Redis use cases?", a:"Caching, rate-limit counters, queues, sessions."},
  {id:"node-m6", level:"medium", topic:"API", q:"Idempotency in REST?", a:"Use idempotency keys, PUT semantics; safe retries."},
  {id:"node-m7", level:"medium", topic:"Auth", q:"JWT pitfalls?", a:"Store securely, short TTL, rotate keys, verify audience/issuer."},
  {id:"node-m8", level:"medium", topic:"RateLimit", q:"How implement?", a:"Token bucket in Redis; headers for limits; backoff."},
  {id:"node-m9", level:"medium", topic:"Testing", q:"Unit vs integration vs e2e?", a:"Function units, module boundaries, full system paths."},
  {id:"node-m10", level:"medium", topic:"Observability", q:"What to collect?", a:"Logs, metrics, traces; correlation IDs."},

  // HARD
  {id:"node-h1", level:"hard", topic:"Arch", q:"Design a job queue?", a:"Producer->broker->workers; ack, retries, DLQ; idempotent handlers."},
  {id:"node-h2", level:"hard", topic:"Scaling", q:"Horiz vs vert scaling?", a:"More instances vs bigger machine; use autoscaling, stateless services."},
  {id:"node-h3", level:"hard", topic:"Security", q:"Prevent SSRF?", a:"Validate URLs, block internal IPs, egress allowlists, timeouts."},
  {id:"node-h4", level:"hard", topic:"API", q:"GraphQL vs REST trade-offs?", a:"Flexible queries vs caching simplicity; schema complexity."},
  {id:"node-h5", level:"hard", topic:"Consistency", q:"Eventual vs strong?", a:"Latency vs correctness; pick per domain."},
  {id:"node-h6", level:"hard", topic:"Resilience", q:"Circuit breaker?", a:"Open on failures to stop traffic; half-open probing; fallback."},
  {id:"node-h7", level:"hard", topic:"Transactions", q:"2PC vs outbox?", a:"2PC complexity; outbox with event relay for reliability."},
  {id:"node-h8", level:"hard", topic:"Caching", q:"Cache stampede fixes?", a:"Jitter TTL, single-flight, stale-while-revalidate."},
  {id:"node-h9", level:"hard", topic:"Queues", q:"Exactly-once delivery?", a:"Hard; design idempotent consumers; dedupe keys."},
  {id:"node-h10", level:"hard", topic:"Deploy", q:"Blue/green vs canary?", a:"Instant switch vs progressive rollout with metrics guards."},
];

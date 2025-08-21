// data/qbank/javascript.js
export const JAVASCRIPT_QA = [
  // ---------------- EASY ----------------
  {
    id: "js-01",
    level: "easy",
    topic: "Basics",
    q: "What are primitive types in JavaScript?",
    a: "string, number, boolean, null, undefined, bigint, symbol",
    pitfalls: "Confusing null (object in typeof) with undefined."
  },
  {
    id: "js-02",
    level: "easy",
    topic: "Variables",
    q: "var vs let vs const — practical differences?",
    a: "var = function scope, hoisted; let/const = block scope, TDZ; prefer const, use let when reassignment is needed.",
    code: `for(var i=0;i<3;i++){ setTimeout(()=>console.log(i),0) } // 3,3,3
for(let i=0;i<3;i++){ setTimeout(()=>console.log(i),0) } // 0,1,2`
  },
  {
    id: "js-03",
    level: "easy",
    topic: "Functions",
    q: "Closures — what, why, where?",
    a: "An inner function retains access to its outer scope even after the outer fn returns.",
    code: `function makeCounter(){let c=0; return ()=>++c} const inc=makeCounter(); inc(); //1`
  },
  {
    id: "js-04",
    level: "easy",
    topic: "Equality",
    q: "== vs === ?",
    a: "== does type coercion, === strict equality (no coercion). Always prefer ===.",
    pitfalls: "`0 == '' // true`, unexpected coercion."
  },
  {
    id: "js-05",
    level: "easy",
    topic: "Objects",
    q: "How do you copy an object shallowly?",
    a: "Object.assign({}, obj) or spread { ...obj }.",
    pitfalls: "Nested objects still reference original (not deep copy)."
  },
  {
    id: "js-06",
    level: "easy",
    topic: "Arrays",
    q: "Difference between map and forEach?",
    a: "map returns a new array, forEach just iterates.",
    code: `[1,2,3].map(x=>x*2) // [2,4,6]`
  },
  {
    id: "js-07",
    level: "easy",
    topic: "DOM",
    q: "How do you select elements in DOM?",
    a: "document.getElementById, querySelector, querySelectorAll.",
  },
  {
    id: "js-08",
    level: "easy",
    topic: "Hoisting",
    q: "What gets hoisted?",
    a: "Function declarations and var (declared, not initialized). let/const in TDZ.",
  },
  {
    id: "js-09",
    level: "easy",
    topic: "JSON",
    q: "How do you convert JS object to JSON and back?",
    a: "JSON.stringify(obj), JSON.parse(str)."
  },
  {
    id: "js-10",
    level: "easy",
    topic: "Falsy",
    q: "List falsy values in JS.",
    a: "false, 0, -0, 0n, '', null, undefined, NaN."
  },

  // ---------------- MEDIUM ----------------
  {
    id: "js-11",
    level: "medium",
    topic: "Async",
    q: "Explain the event loop and microtasks vs macrotasks.",
    a: "Microtasks (Promises, MutationObserver) run before next macrotask (setTimeout, setInterval)."
  },
  {
    id: "js-12",
    level: "medium",
    topic: "Promises",
    q: "How do you chain promises?",
    a: "return inside .then, next then receives it. Always return promises.",
  },
  {
    id: "js-13",
    level: "medium",
    topic: "Async/Await",
    q: "What happens if you forget await?",
    a: "You get a pending Promise instead of value."
  },
  {
    id: "js-14",
    level: "medium",
    topic: "Modules",
    q: "Difference between default and named export?",
    a: "Default: one per file, imported w/o braces; Named: many per file, must match name."
  },
  {
    id: "js-15",
    level: "medium",
    topic: "This",
    q: "How does 'this' behave in arrow vs normal functions?",
    a: "Arrow inherits lexical this; normal depends on call site."
  },
  {
    id: "js-16",
    level: "medium",
    topic: "Prototypes",
    q: "How does inheritance work in JS?",
    a: "Objects delegate to prototype chain via [[Prototype]]."
  },
  {
    id: "js-17",
    level: "medium",
    topic: "DOM Events",
    q: "Difference between capturing and bubbling?",
    a: "Capturing: outer→inner; Bubbling: inner→outer. Default is bubbling."
  },
  {
    id: "js-18",
    level: "medium",
    topic: "Memory",
    q: "What causes memory leaks in JS?",
    a: "Uncleared timers, DOM refs in closures, global vars, detached DOM nodes."
  },
  {
    id: "js-19",
    level: "medium",
    topic: "Performance",
    q: "How to debounce vs throttle a function?",
    a: "Debounce = wait for inactivity; Throttle = run at fixed interval."
  },
  {
    id: "js-20",
    level: "medium",
    topic: "Error Handling",
    q: "How to handle async errors?",
    a: "try/catch with async/await, or .catch() on promises."
  },

  // ---------------- HARD ----------------
  {
    id: "js-21",
    level: "hard",
    topic: "Architecture",
    q: "How would you design a client-side caching system?",
    a: "Cache by key, TTL, SWR, eviction, invalidation strategies."
  },
  {
    id: "js-22",
    level: "hard",
    topic: "Security",
    q: "How to prevent XSS in JS apps?",
    a: "Escape user input, use CSP, sanitize HTML, avoid eval/innerHTML."
  },
  {
    id: "js-23",
    level: "hard",
    topic: "Performance",
    q: "How to minimize reflow/repaint?",
    a: "Batch DOM writes, use requestAnimationFrame, CSS transforms instead of top/left."
  },
  {
    id: "js-24",
    level: "hard",
    topic: "Async",
    q: "How to implement your own Promise.all?",
    a: "Iterate promises, collect results, resolve when all done; reject on first error."
  },
  {
    id: "js-25",
    level: "hard",
    topic: "Concurrency",
    q: "How to implement a task queue with concurrency limit?",
    a: "Maintain pool, start tasks up to N, start next when one finishes."
  },
  {
    id: "js-26",
    level: "hard",
    topic: "Design Patterns",
    q: "Explain the Observer pattern with JS example.",
    a: "Subject maintains list, notifies observers. e.g., EventEmitter."
  },
  {
    id: "js-27",
    level: "hard",
    topic: "Advanced Types",
    q: "Difference between deep copy and shallow copy?",
    a: "Shallow copies refs; deep copies nested. Use structuredClone or libs."
  },
  {
    id: "js-28",
    level: "hard",
    topic: "Event Loop",
    q: "Explain starvation and how to avoid?",
    a: "Too many microtasks starve UI; break work into macrotasks (setTimeout)."
  },
  {
    id: "js-29",
    level: "hard",
    topic: "Intl",
    q: "How to handle internationalization in JS?",
    a: "Intl API: Intl.DateTimeFormat, Intl.NumberFormat; i18n libs like i18next."
  },
  {
    id: "js-30",
    level: "hard",
    topic: "Web APIs",
    q: "How to use Web Workers for performance?",
    a: "Offload heavy computation to worker thread, communicate via postMessage."
  }
];

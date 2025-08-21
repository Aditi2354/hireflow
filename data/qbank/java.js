export const JAVA_QA = [
  // EASY
  {id:"java-e1",level:"easy",topic:"Basics",q:"JVM/JRE/JDK?",a:"Runtime engine, environment to run, and dev kit."},
  {id:"java-e2",level:"easy",topic:"OOP",q:"Inheritance vs composition?",a:"Is‑a vs has‑a; prefer composition."},
  {id:"java-e3",level:"easy",topic:"Types",q:"Primitive vs wrapper?",a:"Raw types vs objects (Integer, Boolean)."},
  {id:"java-e4",level:"easy",topic:"Strings",q:"String immutable why?",a:"Thread‑safe, poolable, security benefits."},
  {id:"java-e5",level:"easy",topic:"Collections",q:"ArrayList vs LinkedList?",a:"Random access vs fast insert/delete."},
  {id:"java-e6",level:"easy",topic:"Map",q:"HashMap vs TreeMap?",a:"Unordered O(1) vs sorted O(log n)."},
  {id:"java-e7",level:"easy",topic:"Exceptions",q:"Checked vs unchecked?",a:"Compile‑time vs runtime."},
  {id:"java-e8",level:"easy",topic:"Threads",q:"Synchronized keyword?",a:"Mutual exclusion monitor lock."},
  {id:"java-e9",level:"easy",topic:"IO",q:"Stream vs Reader?",a:"Bytes vs characters."},
  {id:"java-e10",level:"easy",topic:"Generics",q:"Why generics?",a:"Type safety, no casts."},

  // MEDIUM
  {id:"java-m1",level:"medium",topic:"Concurrency",q:"volatile vs synchronized?",a:"volatile visibility; synchronized mutual exclusion."},
  {id:"java-m2",level:"medium",topic:"Executors",q:"ThreadPoolExecutor params?",a:"Core/max size, queue, keepAlive, rejection."},
  {id:"java-m3",level:"medium",topic:"Streams",q:"Stream vs parallel stream?",a:"Parallel may speed CPU‑bound with overhead."},
  {id:"java-m4",level:"medium",topic:"JVM",q:"Heap vs stack?",a:"Objects/GC vs frames/local vars."},
  {id:"java-m5",level:"medium",topic:"GC",q:"Generational GC idea?",a:"Young objects die fast; separate spaces."},
  {id:"java-m6",level:"medium",topic:"Spring",q:"Dependency Injection?",a:"Container wires beans via inversion of control."},
  {id:"java-m7",level:"medium",topic:"REST",q:"Idempotent methods?",a:"GET/PUT/DELETE are; POST is not."},
  {id:"java-m8",level:"medium",topic:"JPA",q:"Lazy vs eager fetch?",a:"On‑demand vs immediate; N+1 risk."},
  {id:"java-m9",level:"medium",topic:"Records",q:"What are Records?",a:"Compact immutable DTOs with value semantics."},
  {id:"java-m10",level:"medium",topic:"Modules",q:"JPMS purpose?",a:"Strong modular boundaries at compile/runtime."},

  // HARD
  {id:"java-h1",level:"hard",topic:"GC",q:"G1/ZGC trade‑offs?",a:"Low pause collectors; tuning vs memory overhead."},
  {id:"java-h2",level:"hard",topic:"Locking",q:"Deadlock detection?",a:"Thread dumps, jstack; avoid circular waits."},
  {id:"java-h3",level:"hard",topic:"Perf",q:"Escape analysis benefit?",a:"Stack allocation, scalar replacement."},
  {id:"java-h4",level:"hard",topic:"ClassLoader",q:"Multiple class loaders?",a:"Isolate modules/plugins; parent delegation."},
  {id:"java-h5",level:"hard",topic:"Reactive",q:"Project Reactor benefit?",a:"Backpressure‑aware async pipelines."},
  {id:"java-h6",level:"hard",topic:"Security",q:"Serialization risks?",a:"Gadget chains RCE; prefer JSON; whitelist."},
  {id:"java-h7",level:"hard",topic:"Testing",q:"Testcontainers use?",a:"Real dockerized deps for integration tests."},
  {id:"java-h8",level:"hard",topic:"JIT",q:"C1 vs C2 compilers?",a:"Tiered compilation for warmup vs optimized code."},
  {id:"java-h9",level:"hard",topic:"Records",q:"Pattern matching use?",a:"Deconstruct records in switch/instanceof."},
  {id:"java-h10",level:"hard",topic:"Tuning",q:"Heap sizing strategy?",a:"Profile; watch GC pauses; set Xms/Xmx, metaspace, regions."},
];

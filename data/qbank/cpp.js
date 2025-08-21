export const CPP_QA = [
  // EASY
  {id:"cpp-e1",level:"easy",topic:"Basics",q:"Stack vs heap?",a:"Auto lifetime vs dynamic allocation."},
  {id:"cpp-e2",level:"easy",topic:"Pointers",q:"Pointer vs reference?",a:"Nullable re‑seatable vs alias cannot be null."},
  {id:"cpp-e3",level:"easy",topic:"RAII",q:"What is RAII?",a:"Resource tied to object lifetime."},
  {id:"cpp-e4",level:"easy",topic:"Const",q:"const correctness?",a:"Mark immutability for safety/optimization."},
  {id:"cpp-e5",level:"easy",topic:"STL",q:"vector vs list?",a:"Contiguous random access vs linked nodes."},
  {id:"cpp-e6",level:"easy",topic:"Header",q:"Include guards?",a:"#pragma once or macro guards to avoid multiple inclusion."},
  {id:"cpp-e7",level:"easy",topic:"IO",q:"cout flush?",a:"std::endl flushes; '\\n' does not."},
  {id:"cpp-e8",level:"easy",topic:"Build",q:"Compilation units?",a:"Each .cpp compiled separately then linked."},
  {id:"cpp-e9",level:"easy",topic:"Enums",q:"enum class vs enum?",a:"Scoped strong typed vs unscoped."},
  {id:"cpp-e10",level:"easy",topic:"Auto",q:"auto keyword?",a:"Type inference from initializer."},

  // MEDIUM
  {id:"cpp-m1",level:"medium",topic:"Move",q:"Move semantics?",a:"Transfer resources with && and std::move."},
  {id:"cpp-m2",level:"medium",topic:"SmartPtr",q:"unique_ptr vs shared_ptr?",a:"Exclusive ownership vs ref‑counted shared."},
  {id:"cpp-m3",level:"medium",topic:"Templates",q:"SFINAE meaning?",a:"Substitution failure is not an error; select overloads."},
  {id:"cpp-m4",level:"medium",topic:"Exceptions",q:"noexcept use?",a:"Promises not to throw; affects optimizations/ABI."},
  {id:"cpp-m5",level:"medium",topic:"Concurrency",q:"Data race vs race condition?",a:"Undefined shared access vs logical ordering bug."},
  {id:"cpp-m6",level:"medium",topic:"Atomics",q:"Memory order?",a:"Relaxed, acquire/release, seq_cst."},
  {id:"cpp-m7",level:"medium",topic:"Ranges",q:"Range‑based for?",a:"Iterate via begin/end; works with containers."},
  {id:"cpp-m8",level:"medium",topic:"Inline",q:"ODR rule?",a:"One definition of entities across program."},
  {id:"cpp-m9",level:"medium",topic:"Modules",q:"C++20 modules?",a:"Faster builds; explicit interfaces."},
  {id:"cpp-m10",level:"medium",topic:"UB",q:"Undefined behavior examples?",a:"Out‑of‑bounds, uninitialized read, data race."},

  // HARD
  {id:"cpp-h1",level:"hard",topic:"Perf",q:"Small buffer optimization?",a:"Inline small strings to avoid heap."},
  {id:"cpp-h2",level:"hard",topic:"ABI",q:"ODR‑use vs constant folding?",a:"Forces definition vs compile‑time value."},
  {id:"cpp-h3",level:"hard",topic:"Template",q:"CRTP pattern?",a:"Static polymorphism via derived passing to base template."},
  {id:"cpp-h4",level:"hard",topic:"Alloc",q:"Custom allocators?",a:"Control memory locality/perf in containers."},
  {id:"cpp-h5",level:"hard",topic:"Metaprogram",q:"constexpr vs consteval?",a:"May be runtime or compile-time vs must be compile-time."},
  {id:"cpp-h6",level:"hard",topic:"Linking",q:"ODR violation symptoms?",a:"Weird runtime, multiple definitions, UB."},
  {id:"cpp-h7",level:"hard",topic:"Tooling",q:"AddressSanitizer?",a:"Detects memory errors at runtime."},
  {id:"cpp-h8",level:"hard",topic:"Concurrency",q:"Lock‑free pros/cons?",a:"Low latency; tricky correctness; ABA issues."},
  {id:"cpp-h9",level:"hard",topic:"Design",q:"Pimpl idiom?",a:"Hide impl, cut rebuilds, stable ABI."},
  {id:"cpp-h10",level:"hard",topic:"SIMD",q:"Vectorization in C++?",a:"Compiler auto‑vector or intrinsics to use SIMD."},
];

export const PYTHON_QA = [
  // EASY
  {id:"py-e1", level:"easy", topic:"Basics", q:"List vs tuple?", a:"List mutable; tuple immutable and hashable if items are hashable."},
  {id:"py-e2", level:"easy", topic:"Dict", q:"How to loop keys & values?", a:"for k,v in d.items(): ..."},
  {id:"py-e3", level:"easy", topic:"Virtualenv", q:"Why venv?", a:"Isolate dependencies per project."},
  {id:"py-e4", level:"easy", topic:"PEP8", q:"What is PEP8?", a:"Python style guide; use black/flake8."},
  {id:"py-e5", level:"easy", topic:"Comprehensions", q:"List comprehension?", a:"[f(x) for x in xs if cond]."},
  {id:"py-e6", level:"easy", topic:"Slicing", q:"string[::-1]?", a:"Reverse string."},
  {id:"py-e7", level:"easy", topic:"Functions", q:"*args vs **kwargs?", a:"Var positional vs keyword dict."},
  {id:"py-e8", level:"easy", topic:"Files", q:"with open(...) as f:", a:"Context manager auto-closes file."},
  {id:"py-e9", level:"easy", topic:"Exceptions", q:"Raise custom error?", a:"class MyErr(Exception): pass; raise MyErr()"},
  {id:"py-e10", level:"easy", topic:"Pip", q:"Freeze deps?", a:"pip freeze > requirements.txt"},

  // MEDIUM
  {id:"py-m1", level:"medium", topic:"Iterators", q:"Iterator vs iterable?", a:"Iterator has __next__; iterable has __iter__ returning iterator."},
  {id:"py-m2", level:"medium", topic:"Generators", q:"yield usage?", a:"Produce lazy sequences; preserve state between yields."},
  {id:"py-m3", level:"medium", topic:"Decorators", q:"What is a decorator?", a:"Function that wraps another to extend behavior."},
  {id:"py-m4", level:"medium", topic:"Typing", q:"Type hints benefits?", a:"Editors/static checks; better docs; mypy."},
  {id:"py-m5", level:"medium", topic:"Dataclasses", q:"Why dataclass?", a:"Auto __init__/__repr__/__eq__; simple data containers."},
  {id:"py-m6", level:"medium", topic:"Async", q:"asyncio basics?", a:"Event loop with coroutines/awaitables; tasks for concurrency."},
  {id:"py-m7", level:"medium", topic:"Packages", q:"__init__.py purpose?", a:"Marks package; can expose API."},
  {id:"py-m8", level:"medium", topic:"Multiprocessing", q:"When over threading?", a:"CPU-bound tasks due to GIL."},
  {id:"py-m9", level:"medium", topic:"Context", q:"contextlib useful?", a:"Create context managers; closing(), suppress(), contextmanager."},
  {id:"py-m10", level:"medium", topic:"Testing", q:"pytest fixtures?", a:"Reusable setup/teardown with scopes."},

  // HARD
  {id:"py-h1", level:"hard", topic:"GIL", q:"What is GIL?", a:"Global Interpreter Lock allows one thread execute bytecode at a time."},
  {id:"py-h2", level:"hard", topic:"C-Ext", q:"Speed up Python?", a:"C extensions, Cython, Numba, PyPy, vectorization."},
  {id:"py-h3", level:"hard", topic:"Memory", q:"Ref counting + GC?", a:"Ref counts + cyclic GC for unreachable cycles."},
  {id:"py-h4", level:"hard", topic:"IO", q:"Async IO pitfalls?", a:"Blocking calls in coroutines; use aio libs or run_in_executor."},
  {id:"py-h5", level:"hard", topic:"Perf", q:"Profile tools?", a:"cProfile, line_profiler, py-spy, scalene."},
  {id:"py-h6", level:"hard", topic:"Packaging", q:"Wheel vs source dist?", a:"Wheel prebuilt binary; sdist requires build."},
  {id:"py-h7", level:"hard", topic:"Data", q:"Pandas memory reduce?", a:"Categoricals, dtypes, chunking, vectorize."},
  {id:"py-h8", level:"hard", topic:"Async", q:"Cancel tasks safely?", a:"task.cancel(); handle asyncio.CancelledError in coroutine."},
  {id:"py-h9", level:"hard", topic:"Security", q:"Virtualenv + .env risk?", a:"Keep secrets out of repo; restrict file perms; use vaults."},
  {id:"py-h10", level:"hard", topic:"Deploy", q:"Package CLI tool?", a:"entry_points in setup.cfg/pyproject; publish to PyPI."},
];

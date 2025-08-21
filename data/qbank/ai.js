export const AI_QA = [
  // EASY
  {id:"ai-e1",level:"easy",topic:"Basics",q:"What is AI vs ML?",a:"AI is broad intelligent behavior; ML is data‑driven learning."},
  {id:"ai-e2",level:"easy",topic:"DL",q:"Neural network?",a:"Function approximator with layered linear+nonlinear units."},
  {id:"ai-e3",level:"easy",topic:"Data",q:"Train/val/test split?",a:"Fit, tune, and final unbiased evaluation."},
  {id:"ai-e4",level:"easy",topic:"Metrics",q:"Accuracy vs F1?",a:"Accuracy overall; F1 balances precision/recall."},
  {id:"ai-e5",level:"easy",topic:"Overfit",q:"How to detect?",a:"Low train loss, high val loss; gap increases."},
  {id:"ai-e6",level:"easy",topic:"Regularize",q:"L2 vs dropout?",a:"L2 weights penalty; dropout randomly drops activations."},
  {id:"ai-e7",level:"easy",topic:"NLP",q:"Tokenization?",a:"Split text to subword tokens (BPE/WordPiece)."},
  {id:"ai-e8",level:"easy",topic:"Vision",q:"CNN core idea?",a:"Local receptive fields and shared weights."},
  {id:"ai-e9",level:"easy",topic:"Optimization",q:"SGD vs Adam?",a:"Adam uses adaptive moments; faster convergence sometimes."},
  {id:"ai-e10",level:"easy",topic:"Inference",q:"Batching benefit?",a:"Better throughput on GPU/TPU."},

  // MEDIUM
  {id:"ai-m1",level:"medium",topic:"TF/IDF",q:"What is TF‑IDF?",a:"Term frequency scaled by inverse doc frequency."},
  {id:"ai-m2",level:"medium",topic:"Transformers",q:"Self‑attention purpose?",a:"Relate tokens regardless of distance."},
  {id:"ai-m3",level:"medium",topic:"Fine‑tune",q:"When to fine‑tune?",a:"Domain‑specific tasks lacking generalization from base model."},
  {id:"ai-m4",level:"medium",topic:"Eval",q:"ROC‑AUC meaning?",a:"Ranking quality across thresholds."},
  {id:"ai-m5",level:"medium",topic:"Drift",q:"Data drift?",a:"Input distribution changes; needs monitoring."},
  {id:"ai-m6",level:"medium",topic:"Serving",q:"Online vs batch?",a:"Low‑latency per‑request vs scheduled offline processing."},
  {id:"ai-m7",level:"medium",topic:"Prompt",q:"Prompt engineering?",a:"Craft inputs to guide LLM behavior."},
  {id:"ai-m8",level:"medium",topic:"RAG",q:"RAG pipeline?",a:"Retrieve relevant docs then generate answer with context."},
  {id:"ai-m9",level:"medium",topic:"Ethics",q:"Bias mitigation?",a:"Balanced data, fairness constraints, audits."},
  {id:"ai-m10",level:"medium",topic:"Explain",q:"SHAP/LIME?",a:"Feature attribution methods for interpretability."},

  // HARD
  {id:"ai-h1",level:"hard",topic:"LLMs",q:"KV cache trade‑offs?",a:"Lower latency but memory heavy; manage with chunking/eviction."},
  {id:"ai-h2",level:"hard",topic:"Scaling",q:"Model vs data vs compute scaling laws?",a:"Loss decreases log‑linearly with optimal balance."},
  {id:"ai-h3",level:"hard",topic:"Quant",q:"Quantization benefits?",a:"Smaller/faster with minimal accuracy drop."},
  {id:"ai-h4",level:"hard",topic:"Distill",q:"Knowledge distillation?",a:"Train smaller student to mimic teacher outputs."},
  {id:"ai-h5",level:"hard",topic:"Safety",q:"Guardrails?",a:"Filters, policies, classifiers, constrained decoding."},
  {id:"ai-h6",level:"hard",topic:"Eval",q:"Holistic eval for LLMs?",a:"Task metrics + human eval + safety + latency/cost."},
  {id:"ai-h7",level:"hard",topic:"MLOps",q:"Feature store purpose?",a:"Consistent online/offline features with lineage."},
  {id:"ai-h8",level:"hard",topic:"Retrieval",q:"Vector DB pitfalls?",a:"Index size, recall/latency trade‑offs, drift of embeddings."},
  {id:"ai-h9",level:"hard",topic:"Streaming",q:"Live inference challenges?",a:"Backpressure, autoscaling, cold start, ordering."},
  {id:"ai-h10",level:"hard",topic:"Privacy",q:"PII handling in training?",a:"Redaction, consent, DLP scanning, minimization."},
];

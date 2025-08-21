export const ML_QA = [
  // EASY
  {id:"ml-e1",level:"easy",topic:"Supervised",q:"Label vs feature?",a:"Target to predict vs input variables."},
  {id:"ml-e2",level:"easy",topic:"Split",q:"Why validation set?",a:"Tune hyperparams without leaking test data."},
  {id:"ml-e3",level:"easy",topic:"Bias/Variance",q:"High bias symptom?",a:"Underfit: poor train & val accuracy."},
  {id:"ml-e4",level:"easy",topic:"Regularize",q:"L1 vs L2?",a:"L1 sparse; L2 small weights."},
  {id:"ml-e5",level:"easy",topic:"Trees",q:"Random forest idea?",a:"Many trees on bootstraps; average to reduce variance."},
  {id:"ml-e6",level:"easy",topic:"SVM",q:"Kernel trick?",a:"Implicit mapping to higher‑dim space."},
  {id:"ml-e7",level:"easy",topic:"KNN",q:"Choice of k?",a:"Trade bias/variance; cross‑validate."},
  {id:"ml-e8",level:"easy",topic:"Clustering",q:"K‑means objective?",a:"Minimize within‑cluster SSE."},
  {id:"ml-e9",level:"easy",topic:"Scaling",q:"Why standardize features?",a:"Algorithms sensitive to scale (KNN, SVM, K‑means)."},
  {id:"ml-e10",level:"easy",topic:"Leakage",q:"Data leakage example?",a:"Using future info during training."},

  // MEDIUM
  {id:"ml-m1",level:"medium",topic:"CV",q:"k‑fold cross‑val?",a:"Split into k folds; rotate val fold; average score."},
  {id:"ml-m2",level:"medium",topic:"Imbalance",q:"Handle class imbalance?",a:"Resampling, class weights, proper metrics."},
  {id:"ml-m3",level:"medium",topic:"Calibration",q:"Why calibrate probabilities?",a:"Align predicted probs with reality (Platt/Isotonic)."},
  {id:"ml-m4",level:"medium",topic:"Feature",q:"Target encoding risk?",a:"Leakage; use CV folds to compute encodings."},
  {id:"ml-m5",level:"medium",topic:"Boosting",q:"XGBoost vs RF?",a:"Boosting lowers bias; RF lowers variance."},
  {id:"ml-m6",level:"medium",topic:"Time Series",q:"Walk‑forward validation?",a:"Respect temporal order when splitting."},
  {id:"ml-m7",level:"medium",topic:"Explain",q:"Permutation importance?",a:"Drop in metric after shuffling feature."},
  {id:"ml-m8",level:"medium",topic:"Pipelines",q:"Why pipeline objects?",a:"Avoid leakage and keep transforms aligned."},
  {id:"ml-m9",level:"medium",topic:"Drift",q:"Concept vs data drift?",a:"Label relationship changes vs input distribution shift."},
  {id:"ml-m10",level:"medium",topic:"Serving",q:"A/B vs shadow?",a:"A/B splits traffic; shadow mirrors without user impact."},

  // HARD
  {id:"ml-h1",level:"hard",topic:"Prob",q:"Bayes theorem use?",a:"Update belief with evidence; Naive Bayes classifier."},
  {id:"ml-h2",level:"hard",topic:"Optimization",q:"Vanishing gradient fixes?",a:"Resnets, ReLU, normalization, good init."},
  {id:"ml-h3",level:"hard",topic:"Graph",q:"GNN intuition?",a:"Aggregate neighbor info; message passing."},
  {id:"ml-h4",level:"hard",topic:"AutoML",q:"Risks of AutoML?",a:"Leakage, spurious models, resource cost."},
  {id:"ml-h5",level:"hard",topic:"Causality",q:"Correlation vs causation?",a:"Need interventions/DAGs; counterfactual reasoning."},
  {id:"ml-h6",level:"hard",topic:"Fairness",q:"Equalized odds?",a:"Equal TPR/FPR across groups."},
  {id:"ml-h7",level:"hard",topic:"Active",q:"Active learning benefit?",a:"Label only informative points to cut cost."},
  {id:"ml-h8",level:"hard",topic:"Compression",q:"Pruning vs quantization?",a:"Remove weights vs lower precision."},
  {id:"ml-h9",level:"hard",topic:"Ensembles",q:"Stacking caveat?",a:"Meta‑model leakage without CV out‑of‑folds."},
  {id:"ml-h10",level:"hard",topic:"Prod",q:"Shadow drift monitoring?",a:"Compare predictions between new/old on same traffic."},
];

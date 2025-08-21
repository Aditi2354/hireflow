export const DATASCI_QA = [
  // EASY
  {id:"ds-e1",level:"easy",topic:"SQL",q:"INNER vs LEFT join?",a:"INNER matches only; LEFT keeps left with NULLs."},
  {id:"ds-e2",level:"easy",topic:"Pandas",q:"loc vs iloc?",a:"loc label-based; iloc integer index based."},
  {id:"ds-e3",level:"easy",topic:"Viz",q:"When boxplot?",a:"Show distribution & outliers across groups."},
  {id:"ds-e4",level:"easy",topic:"Stats",q:"Mean vs median?",a:"Median robust to outliers."},
  {id:"ds-e5",level:"easy",topic:"NA",q:"Handle missing data?",a:"Impute, drop, model supports NA."},
  {id:"ds-e6",level:"easy",topic:"Sampling",q:"Stratified sampling?",a:"Keep class proportions."},
  {id:"ds-e7",level:"easy",topic:"Feature",q:"One‑hot vs label enc?",a:"One‑hot for nominal; label for ordinals/trees."},
  {id:"ds-e8",level:"easy",topic:"EDA",q:"Collinearity issue?",a:"Inflates variances; unstable coefficients."},
  {id:"ds-e9",level:"easy",topic:"Outliers",q:"Detect outliers?",a:"IQR rule, z‑score, robust models."},
  {id:"ds-e10",level:"easy",topic:"A/B",q:"p‑value definition?",a:"Prob of seeing data under null."},

  // MEDIUM
  {id:"ds-m1",level:"medium",topic:"Power",q:"What affects power?",a:"Effect size, variance, alpha, sample size."},
  {id:"ds-m2",level:"medium",topic:"Confounding",q:"Confounder example?",a:"Ice‑cream sales & drowning; temperature confounds."},
  {id:"ds-m3",level:"medium",topic:"Cohort",q:"Survivorship bias?",a:"Only successful cases observed."},
  {id:"ds-m4",level:"medium",topic:"SQL",q:"Window vs group by?",a:"Window keeps row cardinality; group collapses."},
  {id:"ds-m5",level:"medium",topic:"Metrics",q:"RMSE vs MAE?",a:"RMSE penalizes large errors more."},
  {id:"ds-m6",level:"medium",topic:"Causality",q:"Diff‑in‑diff?",a:"Parallel trends compare treated vs control changes."},
  {id:"ds-m7",level:"medium",topic:"PCA",q:"When use PCA?",a:"Reduce dimensions, decorrelate features."},
  {id:"ds-m8",level:"medium",topic:"Time",q:"Seasonality handling?",a:"Decompose, seasonal dummies, SARIMA/Prophet."},
  {id:"ds-m9",level:"medium",topic:"Prod",q:"Dashboard best practices?",a:"Clear KPIs, filters, drill‑downs, alerts."},
  {id:"ds-m10",level:"medium",topic:"Ethics",q:"Data minimization?",a:"Collect only necessary info; privacy by design."},

  // HARD
  {id:"ds-h1",level:"hard",topic:"Experiment",q:"Peeking problem?",a:"Early looks inflate Type‑I error; use sequential tests."},
  {id:"ds-h2",level:"hard",topic:"Bayesian",q:"Posterior vs prior?",a:"Prior belief updated by likelihood → posterior."},
  {id:"ds-h3",level:"hard",topic:"Observational",q:"Propensity score?",a:"Probability of treatment used for matching/weighting."},
  {id:"ds-h4",level:"hard",topic:"Missing",q:"MCAR/MAR/MNAR?",a:"Completely at random / at random / not at random."},
  {id:"ds-h5",level:"hard",topic:"Multiple tests",q:"FDR control?",a:"Benjamini‑Hochberg q‑values."},
  {id:"ds-h6",level:"hard",topic:"SQL",q:"Anti‑join use?",a:"Find rows without matches."},
  {id:"ds-h7",level:"hard",topic:"Drift",q:"Population stability index?",a:"PSI to quantify distribution shift."},
  {id:"ds-h8",level:"hard",topic:"Privacy",q:"Differential privacy?",a:"Random noise to bound influence of single record (ε)."},
  {id:"ds-h9",level:"hard",topic:"Design",q:"North‑star metric pitfalls?",a:"Optimize proxy while hurting long‑term goals."},
  {id:"ds-h10",level:"hard",topic:"Sampling",q:"Bootstrap idea?",a:"Resample with replacement to estimate uncertainty."},
];

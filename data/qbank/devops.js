export const DEVOPS_QA = [
  // EASY
  {id:"dev-e1",level:"easy",topic:"Basics",q:"What is CI/CD?",a:"Automated integration, testing and delivery/deploy."},
  {id:"dev-e2",level:"easy",topic:"Git",q:"Feature branch workflow?",a:"Branch per feature → PR → review → merge."},
  {id:"dev-e3",level:"easy",topic:"Containers",q:"Why Docker?",a:"Portable, immutable runtime; same env across stages."},
  {id:"dev-e4",level:"easy",topic:"IaC",q:"What is IaC?",a:"Define infra in code (e.g., Terraform, CloudFormation)."},
  {id:"dev-e5",level:"easy",topic:"Monitoring",q:"Metrics vs logs vs traces?",a:"Quantitative vs text events vs request spans."},
  {id:"dev-e6",level:"easy",topic:"K8s",q:"Pod vs Deployment?",a:"Pod is unit of scheduling; Deployment manages ReplicaSets."},
  {id:"dev-e7",level:"easy",topic:"Networking",q:"Ingress in Kubernetes?",a:"HTTP(S) routing into cluster via controller."},
  {id:"dev-e8",level:"easy",topic:"Registry",q:"Image tagging best practice?",a:"Semantic tags + immutable digest pins."},
  {id:"dev-e9",level:"easy",topic:"Secrets",q:"Store secrets safely?",a:"Vault/KMS/Secrets manager; avoid in repo."},
  {id:"dev-e10",level:"easy",topic:"Backups",q:"3‑2‑1 rule?",a:"3 copies, 2 media, 1 offsite."},

  // MEDIUM
  {id:"dev-m1",level:"medium",topic:"Pipelines",q:"Blue/green vs canary deploys?",a:"BG instant switch; canary gradual with metrics guards."},
  {id:"dev-m2",level:"medium",topic:"Scaling",q:"HPA signals?",a:"CPU/memory/custom metrics to scale replicas."},
  {id:"dev-m3",level:"medium",topic:"Observability",q:"Golden signals?",a:"Latency, traffic, errors, saturation."},
  {id:"dev-m4",level:"medium",topic:"Reliability",q:"Circuit breaker pattern?",a:"Stop sending to failing service; half‑open probes."},
  {id:"dev-m5",level:"medium",topic:"Security",q:"Shift‑left security?",a:"Scan code/deps in pipeline early."},
  {id:"dev-m6",level:"medium",topic:"Infra",q:"Immutable vs mutable servers?",a:"Rebuild images vs in‑place config; immutable is safer."},
  {id:"dev-m7",level:"medium",topic:"K8s",q:"Requests vs limits?",a:"Scheduling vs upper CPU/mem cap; avoid throttling."},
  {id:"dev-m8",level:"medium",topic:"Caching",q:"Cache busting strategy?",a:"Content hashes in URLs; CDN invalidation APIs."},
  {id:"dev-m9",level:"medium",topic:"DBOps",q:"Zero‑downtime migration?",a:"Expand/contract, backfill, dual‑write, cutover."},
  {id:"dev-m10",level:"medium",topic:"SRE",q:"Error budget purpose?",a:"Trade reliability vs velocity; gates risky changes."},

  // HARD
  {id:"dev-h1",level:"hard",topic:"HA",q:"Design multi‑region active‑active?",a:"Global DNS, data replication, conflict resolution, health‑based routing."},
  {id:"dev-h2",level:"hard",topic:"K8s",q:"Stateful set design?",a:"Stable IDs/storage; headless service; ordered rollout."},
  {id:"dev-h3",level:"hard",topic:"Resilience",q:"Chaos engineering goals?",a:"Validate assumptions; improve MTTR and playbooks."},
  {id:"dev-h4",level:"hard",topic:"Security",q:"Supply‑chain hardening?",a:"SBOM, sigstore, provenance, minimal base images."},
  {id:"dev-h5",level:"hard",topic:"Networking",q:"Service mesh benefits?",a:"mTLS, retries, traffic splits, observability without code changes."},
  {id:"dev-h6",level:"hard",topic:"Cost",q:"Optimizing cloud cost?",a:"Right‑size, autoscale, spot, reserved, turn off idle, egress control."},
  {id:"dev-h7",level:"hard",topic:"Disaster",q:"RPO vs RTO?",a:"Data loss window vs time to restore service."},
  {id:"dev-h8",level:"hard",topic:"Data",q:"Backup consistency?",a:"App quiesce, snapshots, binlog/PITR; test restores."},
  {id:"dev-h9",level:"hard",topic:"Performance",q:"CDN pitfalls?",a:"Stale content, cache stampede, private data caching."},
  {id:"dev-h10",level:"hard",topic:"Governance",q:"Policy as code?",a:"OPA/Conftest to enforce org rules in CI/CD."},
];

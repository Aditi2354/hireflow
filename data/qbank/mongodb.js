export const MONGODB_QA = [
  // EASY
  {id:"mongo-e1", level:"easy", topic:"Basics", q:"What is a collection?", a:"Grouping of BSON documents in a database."},
  {id:"mongo-e2", level:"easy", topic:"Types", q:"BSON vs JSON?", a:"Binary superset with more types: ObjectId, Date, Decimal128, etc."},
  {id:"mongo-e3", level:"easy", topic:"CRUD", q:"insertOne vs insertMany?", a:"Single doc vs batch of docs."},
  {id:"mongo-e4", level:"easy", topic:"Query", q:"find vs findOne?", a:"Cursor for many vs single document."},
  {id:"mongo-e5", level:"easy", topic:"Index", q:"Why indexes?", a:"Speed queries at cost of writes/storage."},
  {id:"mongo-e6", level:"easy", topic:"Schema", q:"Schema-less?", a:"Collection doesn’t enforce fixed schema by default."},
  {id:"mongo-e7", level:"easy", topic:"ObjectId", q:"What is ObjectId?", a:"12-byte unique identifier with timestamp shard."},
  {id:"mongo-e8", level:"easy", topic:"Update", q:"$set vs $push?", a:"Set field vs append to array."},
  {id:"mongo-e9", level:"easy", topic:"Projection", q:"How to limit fields?", a:"Specify projection in find to include/exclude."},
  {id:"mongo-e10", level:"easy", topic:"Atlas", q:"What is Atlas?", a:"MongoDB managed cloud service."},

  // MEDIUM
  {id:"mongo-m1", level:"medium", topic:"Compound", q:"Why compound index order matters?", a:"Equality before range; supports sort prefixes."},
  {id:"mongo-m2", level:"medium", topic:"Unique", q:"When unique index?", a:"Enforce email/usernames uniqueness."},
  {id:"mongo-m3", level:"medium", topic:"TTL", q:"TTL index use?", a:"Auto-expire docs after time-to-live."},
  {id:"mongo-m4", level:"medium", topic:"Text", q:"Text search?", a:"$text operator with text index."},
  {id:"mongo-m5", level:"medium", topic:"Aggregation", q:"What is pipeline?", a:"Stages like $match,$group,$project for analytics."},
  {id:"mongo-m6", level:"medium", topic:"Sharding", q:"Shard key rules?", a:"High cardinality, good distribution, low jumbo risk."},
  {id:"mongo-m7", level:"medium", topic:"Write", q:"Write concerns?", a:"Acknowledgement levels w:1, majority, journaling."},
  {id:"mongo-m8", level:"medium", topic:"Read", q:"Read preference?", a:"Primary/secondary modes; latency/locality trade-offs."},
  {id:"mongo-m9", level:"medium", topic:"Replication", q:"Members in replica set?", a:"Primary, secondaries, arbiter."},
  {id:"mongo-m10", level:"medium", topic:"Transactions", q:"When multi-doc transactions?", a:"Cross-document atomic ops; otherwise single-doc atomicity is enough."},

  // HARD
  {id:"mongo-h1", level:"hard", topic:"Design", q:"Schema design: embed vs reference?", a:"Embed for locality/one-to-many small; reference for many-to-many/large."},
  {id:"mongo-h2", level:"hard", topic:"Perf", q:"Hot shard mitigation?", a:"Better shard key, hash sharding, pre-splitting."},
  {id:"mongo-h3", level:"hard", topic:"Aggregation", q:"$lookup pitfalls?", a:"Can be expensive; indexes and cardinality matter."},
  {id:"mongo-h4", level:"hard", topic:"Ops", q:"Backups and PITR?", a:"Atlas snapshots + continuous backups for PITR."},
  {id:"mongo-h5", level:"hard", topic:"Security", q:"Best practices?", a:"SCRAM auth, least privilege, IP allowlists, TLS, encryption at rest."},
  {id:"mongo-h6", level:"hard", topic:"Resilience", q:"Failover behavior?", a:"Automatic election; write/read concerns affect durability."},
  {id:"mongo-h7", level:"hard", topic:"Indexes", q:"Over-indexing issues?", a:"Slower writes, larger storage; monitor index usage."},
  {id:"mongo-h8", level:"hard", topic:"Change Streams", q:"Use cases?", a:"Realtime updates/ETL; watch collections/DB/cluster."},
  {id:"mongo-h9", level:"hard", topic:"Arch", q:"Outbox pattern with Mongo?", a:"Write event doc in same txn; relay to broker asynchronously."},
  {id:"mongo-h10", level:"hard", topic:"Testing", q:"How to test queries?", a:"Use in-memory server, seed data, assert aggregation results."},
];

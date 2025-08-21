import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || process.env.MONGO_URI; // accept both

if (!URI) {
  throw new Error(
    "❌ Missing MONGODB_URI (or MONGO_URI) in environment. Set it in .env.local"
  );
}

// connection cache for Next.js (dev hot reload safe)
let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000,
      })
      .then((m) => m)
      .catch((e) => {
        console.error("❌ Mongo connect error:", e?.message);
        throw e;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

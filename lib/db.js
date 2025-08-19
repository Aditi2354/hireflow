import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) console.warn("⚠️ MONGODB_URI not set in env. Set it in .env.local");
let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };
export async function connectToDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "hireflow", bufferCommands: false }).then(m=>m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

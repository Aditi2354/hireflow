import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }
    await connectToDB();
    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: email.toLowerCase(), passwordHash });
    return new Response(JSON.stringify({ ok: true, user: { id: user._id, name, email } }), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Signup failed" }), { status: 500 });
  }
}

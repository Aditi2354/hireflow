import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ ok: false, error: "Email & password required" }, { status: 400 });
    }
    await dbConnect();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ ok: false, error: "Email already registered" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ name, email, passwordHash, provider: "credentials" });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("signup error", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


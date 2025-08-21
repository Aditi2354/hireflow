import dbConnect from "@/lib/mongoose";
import Attempt from "@/models/Attempt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";   // ✅ correct path

export async function GET() {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  const items = await Attempt.find({ email: session.user.email })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return Response.json({ items });
}

export async function POST(req) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  }

  const body = await req.json(); // { type, role, count, correct, saved }
  const doc = await Attempt.create({
    email: session.user.email,
    ...body,
  });

  return Response.json({ ok: true, id: doc._id });
}

'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";

export default function SignUp() {
  const [name, setName] = useState("");          // ✅ state defined
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();                           // ✅ no full page reload
    setErr(""); setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Sign up failed");
      }
      // ✅ auto sign-in after signup
      const si = await signIn("credentials", {
        email, password, redirect: true, callbackUrl: "/dashboard"
      });
      if (si?.error) setErr("Auto sign-in failed, try login.");
    } catch (e) {
      setErr(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold">Create account</h1>
        <p className="text-sm text-muted mt-1">Join HireFlow</p>

        <div className="mt-5 grid gap-3">
          <label className="block text-xs text-muted">Full name</label>
          <input
            placeholder="e.g., Aditi Kesharwani"       // ✅ placeholder + value + onChange
            className="w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
            value={name} onChange={(e)=>setName(e.target.value)}
            required
          />

          <label className="block text-xs text-muted">Email</label>
          <input
            placeholder="you@example.com"
            type="email"
            className="w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label className="block text-xs text-muted">Password</label>
          <input
            placeholder="••••••••"
            type="password"
            className="w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {err && <p className="text-sm text-red-400">{err}</p>}

          <NeoButton variant="primary" size="lg" className="mt-1 w-full" loading={loading}>
            Sign up
          </NeoButton>
        </div>

        {/* Social signup */}
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}  // ✅ Google
            className="w-full h-12 rounded-2xl glass ring-1 ring-white/15 hover:bg-white/10
                       flex items-center justify-center gap-3 transition-all"
          >
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/20">
              {/* Google icon svg */}
              <svg viewBox="0 0 48 48" className="h-5 w-5"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.2 31.7 29 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.3 2.8l5.7-5.7C33.5 6.2 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.2-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 16.1 18.8 13 24 13c2.8 0 5.4 1.1 7.3 2.8l5.7-5.7C33.5 6.2 28.9 4 24 4 16 4 9.1 8.5 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c4.8 0 9.2-1.8 12.5-4.8l-5.8-4.8C28.9 35.9 26.6 37 24 37c-5 0-9.2-3.3-10.7-7.8l-6.7 5.1C9.4 39.5 16.1 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.6 5.8-6.6 7.4l5.8 4.8C37.2 41.8 43 37 43 24c0-1.2-.1-2.3-.4-3.5z"/></svg>
            </span>
            <span className="font-medium">Sign up with Google</span>
          </button>

          <button
            type="button"
            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
            className="w-full h-12 rounded-2xl glass ring-1 ring-white/15 hover:bg-white/10
                       flex items-center justify-center gap-3 transition-all"
          >
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/20">
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 .1.6 1.3 2.9.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0112 6.6c1 0 2 .1 3 .4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.8.5A12 12 0 0012 .5z"/></svg>
            </span>
            <span className="font-medium">Sign up with GitHub</span>
          </button>
        </div>

        <p className="text-sm text-muted mt-4">
          Already have an account? <Link href="/signin" className="underline">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

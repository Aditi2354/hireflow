'use client';
import Link from "next/link";
import { Menu, Sparkles, LogOut } from "lucide-react";
import NeoButton from "@/components/ui/NeoButton";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar(){
  const { data: session } = useSession();
  const loggedIn = !!session?.user;
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass border border-white/10 rounded-2xl mt-4">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>HireFlow</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
                <Link href="/#features" className="hover:text-page">Features</Link>
                <Link href="/#how" className="hover:text-page">How it works</Link>
                <Link href="/#pricing" className="hover:text-page">Pricing</Link>
                <Link href="/dashboard" className="hover:text-page">Dashboard</Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              {!loggedIn ? (
                <>
                  <NeoButton variant="outline" onClick={() => signIn()}>Sign in</NeoButton>
                  <Link href="/signup" className="hidden sm:inline-block">
                    <NeoButton variant="primary">Sign up</NeoButton>
                  </Link>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline text-sm text-muted mr-1">
                    {session.user?.name || session.user?.email}
                  </span>
                  <NeoButton variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
                    <LogOut className="h-4 w-4" /> Sign out
                  </NeoButton>
                </>
              )}
              <button className="md:hidden rounded-xl p-2 ring-1 ring-white/20" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

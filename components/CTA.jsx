import Link from "next/link";
export default function CTA(){
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-purple-500 p-8 sm:p-10 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to level up your career?</h3>
            <p className="text-purple-100 mt-1">Start with a quick resume check in the dashboard.</p>
          </div>
          <Link href="/dashboard" className="rounded-2xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">Open Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

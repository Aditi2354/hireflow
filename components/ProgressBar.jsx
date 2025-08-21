"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch("/api/progress").then(r=>r.json()).then(setData); }, []);
  if (!data) return null;

  return (
    <div className="card flex items-center justify-between">
      <div>
        <div className="font-semibold">Your Progress</div>
        <div className="text-sm text-muted">Attempted: {data.attempted} • Saved: {data.saved} • Correct: {data.correct}</div>
      </div>
      <div className="w-40 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500" style={{ width: Math.min(100, (data.attempted||0) * 5) + "%" }} />
      </div>
    </div>
  );
}

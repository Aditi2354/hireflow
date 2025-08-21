"use client";
import { useEffect, useState } from "react";

export default function DailyChallengePopup({ role="frontend developer" }) {
  const [open, setOpen] = useState(false);
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    const key = "dc-" + new Date().toISOString().slice(0,10);
    if (localStorage.getItem(key)) return;
    fetch(`/api/daily?role=${encodeURIComponent(role)}`)
      .then(r => r.json())
      .then(d => {
        if (d?.daily) { setDaily(d.daily); setOpen(true); localStorage.setItem(key, "shown"); }
      });
  }, [role]);

  if (!open || !daily) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm grid place-items-center z-50">
      <div className="card max-w-lg w-[92%]">
        <h3 className="text-lg font-semibold">Question of the Day</h3>
        <p className="mt-3 font-medium">{daily.question}</p>
        {daily.shortAnswer && (
          <p className="mt-2 text-sm text-muted">Hint: {daily.shortAnswer}</p>
        )}
        <div className="mt-4 flex justify-end gap-3">
          <button className="btn btn-outline" onClick={() => setOpen(false)}>Later</button>
          <button className="btn btn-primary" onClick={() => setOpen(false)}>Got it</button>
        </div>
      </div>
    </div>
  );
}

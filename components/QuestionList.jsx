"use client";
import { useEffect, useState } from "react";

export default function QuestionList({ role }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch(`/api/questions?role=${encodeURIComponent(role)}&count=20`);
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, [role]);

  const save = async (it) => {
    await fetch("/api/attempt", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, question: it.q, shortAnswer: it.a, saved: true })
    });
    alert("Saved!");
  };

  const markAttempted = async (it) => {
    await fetch("/api/attempt", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, question: it.q, shortAnswer: it.a })
    });
    alert("Marked attempted!");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Questions ({items.length})</h3>
        <button onClick={load} className="btn btn-outline">{loading ? "Loading..." : "Refresh"}</button>
      </div>

      {items.map((it, i) => (
        <div key={i} className="card">
          <div className="font-medium">{i+1}. {it.q}</div>
          {it.a && <div className="text-sm text-muted mt-1">Answer: {it.a}</div>}
          <div className="mt-3 flex gap-2">
            <button className="btn btn-primary" onClick={()=>markAttempted(it)}>Mark Attempted</button>
            <button className="btn btn-outline" onClick={()=>save(it)}>Save</button>
          </div>
        </div>
      ))}
    </div>
  );
}

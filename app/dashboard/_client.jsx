'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeoButton from "@/components/ui/NeoButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eraser, Beaker } from "lucide-react";
import DailyChallengePopup from "@/components/DailyChallengePopup";

/* === BANK IMPORTS === */
import { JAVASCRIPT_QA } from "@/data/qbank/javascript";
import { REACT_QA }      from "@/data/qbank/react";
import { NODE_QA }       from "@/data/qbank/node";
import { MONGODB_QA }    from "@/data/qbank/mongodb";
import { PYTHON_QA }     from "@/data/qbank/python";
import { DEVOPS_QA }     from "@/data/qbank/devops";
import { AI_QA }         from "@/data/qbank/ai";
import { ML_QA }         from "@/data/qbank/ml";
import { DATASCI_QA }    from "@/data/qbank/datascience";
import { JAVA_QA }       from "@/data/qbank/java";
import { CPP_QA }        from "@/data/qbank/cpp";
import { UIUX_QA }       from "@/data/qbank/uiux";
import { NEXTJS_QA }     from "@/data/qbank/nextjs";

function Toast({ open, message }) {
  if (!open) return null;
  return (
    <div
      className="fixed bottom-6 right-6 z-[60] rounded-2xl px-4 py-3 text-sm text-white"
      style={{ background: "rgba(139,92,246,.95)", boxShadow: "0 12px 36px rgba(139,92,246,.35)" }}
    >
      {message}
    </div>
  );
}

export default function ClientDashboard() {
  // ---------- Analyzer ----------
  const [resumeText, setResumeText] = useState("");
  const [jdText, setJdText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);

  // ---------- Local Interview Prep ----------
  const BANKS = {
    javascript:  { label: "JavaScript",              data: JAVASCRIPT_QA },
    react:       { label: "React",                   data: REACT_QA },
    node:        { label: "Node.js",                 data: NODE_QA },
    mongodb:     { label: "MongoDB",                 data: MONGODB_QA },
    python:      { label: "Python",                  data: PYTHON_QA },
    devops:      { label: "DevOps",                  data: DEVOPS_QA },
    ai:          { label: "Artificial Intelligence", data: AI_QA },
    ml:          { label: "Machine Learning",        data: ML_QA },
    datascience: { label: "Data Science",            data: DATASCI_QA },
    java:        { label: "Java",                    data: JAVA_QA },
    cpp:         { label: "C++",                     data: CPP_QA },
    uiux:        { label: "UI/UX",                   data: UIUX_QA },
    nextjs:      { label: "Next.js",                 data: NEXTJS_QA },
  };

  const [bankKey, setBankKey]       = useState("javascript");
  const [diffLevel, setDiffLevel]   = useState("all"); // all|easy|medium|hard
  const [count, setCount]           = useState(20);    // 1–50
  const [qaItems, setQaItems]       = useState([]);

  const [toast, setToast] = useState({ open: false, message: "" });
  useEffect(() => {
    if (!toast.open) return;
    const t = setTimeout(() => setToast({ open: false, message: "" }), 1500);
    return () => clearTimeout(t);
  }, [toast.open]);

  // ---------- Analyzer handlers ----------
  const runAnalyze = async () => {
    setLoadingAnalyze(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ resumeText, jdText }),
      });
      const data = await res.json();
      setAnalysis(data);
      setToast({ open: true, message: "Analysis ready!" });
    } finally {
      setLoadingAnalyze(false);
    }
  };

  // ---------- Local questions ----------
  const loadLocalQuestions = () => {
    const poolAll = BANKS[bankKey]?.data ?? [];
    const pool = diffLevel === "all" ? poolAll : poolAll.filter(q => q.level === diffLevel);

    // shuffle
    const arr = pool.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const picked = arr.slice(0, Math.min(50, Math.max(1, count)));
    setQaItems(picked);
    setToast({ open: true, message: `Loaded ${picked.length} from ${BANKS[bankKey].label}` });
  };

  // ---------- Helpers ----------
  const fillSample = () => {
    setResumeText("Backend Node.js developer with REST APIs, PostgreSQL, Redis, Docker, CI/CD.");
    setJdText("Hiring Backend Node.js dev: Node, Express, REST, DBs, Docker, AWS, CI/CD.");
  };
  const clearAnalyzer = () => { setResumeText(""); setJdText(""); setAnalysis(null); };
  const clearInterview = () => { setQaItems([]); setDiffLevel("all"); setCount(20); };

  // Common pretty classes for native selects/inputs
  const prettySelect =
    "appearance-none rounded-xl bg-white/10 text-white/90 px-4 py-3 ring-1 ring-white/15 " +
    "focus:outline-none focus:ring-2 focus:ring-purple-400/60 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]";
  const prettyWrapper = "relative";
  const caret =
    "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-80";

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <DailyChallengePopup role="frontend developer" />
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted mt-2">Use the tools below.</p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          {/* ---------------- Interview Prep (native selects, fancy style) ---------------- */}
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35}} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Interview Prep</h3>
                <p className="text-sm text-muted mt-1">
                  Choose a bank, set difficulty & count, then load questions.
                </p>
              </div>
              <NeoButton variant="ghost" size="sm" onClick={clearInterview}>
                <Eraser className="h-4 w-4"/> Clear
              </NeoButton>
            </div>

            {/* Controls: bank, difficulty, count */}
            <div className="mt-3 grid gap-2 sm:grid-cols-[1fr,160px,120px]">
              {/* BANK */}
              <div className={prettyWrapper}>
                <select
                  className={prettySelect + " pr-9"}
                  value={bankKey}
                  onChange={(e) => setBankKey(e.target.value)}
                  aria-label="Question bank"
                >
                  {Object.entries(BANKS).map(([key, v]) => (
                    <option key={key} value={key} className="bg-slate-900">
                      Use Local ({v.label} bank)
                    </option>
                  ))}
                </select>
                <svg className={caret} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>

              {/* DIFFICULTY */}
              <div className={prettyWrapper}>
                <select
                  className={prettySelect + " pr-9"}
                  value={diffLevel}
                  onChange={(e) => setDiffLevel(e.target.value)}
                  aria-label="Difficulty"
                >
                  <option value="all"   className="bg-slate-900">All difficulties</option>
                  <option value="easy"  className="bg-slate-900">Easy</option>
                  <option value="medium"className="bg-slate-900">Medium</option>
                  <option value="hard"  className="bg-slate-900">Hard</option>
                </select>
                <svg className={caret} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>

              {/* COUNT */}
              <input
                type="number"
                min={1}
                max={50}
                className={prettySelect}
                value={count}
                onChange={(e) => setCount(Math.min(50, Math.max(1, Number(e.target.value) || 20)))}
                title="How many?"
                aria-label="How many questions"
              />
            </div>

            <NeoButton variant="primary" className="mt-3" onClick={loadLocalQuestions}>
              Load Questions
            </NeoButton>

            {qaItems.length>0 && (
              <ol className="mt-4 list-decimal pl-6 text-sm space-y-4">
                {qaItems.map((it,i)=>(
                  <li key={it.id ?? i}>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{it.q}</p>
                      {it.level && (
                        <span className="inline-flex items-center rounded-xl px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-white/10 bg-white/5 text-white/80">
                          {it.level}
                        </span>
                      )}
                      {it.topic && (
                        <span className="inline-flex items-center rounded-xl px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-white/10 bg-white/5 text-white/80">
                          {it.topic}
                        </span>
                      )}
                    </div>
                    {it.a && <p className="mt-1 text-muted">• {it.a}</p>}
                    {it.code && (
                      <pre className="mt-2 rounded-xl bg-black/40 ring-1 ring-white/10 overflow-x-auto p-3 text-xs">
{it.code}
                      </pre>
                    )}
                    {it.pitfalls && (
                      <p className="mt-1 text-xs text-white/60">Pitfalls: {it.pitfalls}</p>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </motion.div>

          {/* ---------------- Resume Analyzer ---------------- */}
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35, delay:.05}} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Resume Analyzer</h3>
                <p className="text-sm text-muted mt-1">Paste your resume and the JD (text).</p>
              </div>
              <div className="flex items-center gap-2">
                <NeoButton variant="ghost" size="sm" onClick={fillSample}>
                  <Beaker className="h-4 w-4"/> Sample
                </NeoButton>
                <NeoButton variant="ghost" size="sm" onClick={clearAnalyzer}>
                  <Eraser className="h-4 w-4"/> Clear
                </NeoButton>
              </div>
            </div>

            <label className="mt-3 block text-xs text-muted">Resume ({resumeText.length} chars)</label>
            <textarea
              className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
              rows={6}
              placeholder="Paste resume text..."
              value={resumeText}
              onChange={e=>setResumeText(e.target.value)}
            />
            <label className="mt-3 block text-xs text-muted">Job Description ({jdText.length} chars)</label>
            <textarea
              className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
              rows={6}
              placeholder="Paste JD text..."
              value={jdText}
              onChange={e=>setJdText(e.target.value)}
            />
            <NeoButton
              variant="primary"
              className="mt-3"
              loading={loadingAnalyze}
              onClick={runAnalyze}
              disabled={!resumeText.trim() || !jdText.trim() || loadingAnalyze}
            >
              Analyze
            </NeoButton>

            {analysis && (
              <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-muted">Match Score</p>
                <p className="text-3xl font-bold mt-1">{Math.round(analysis.score)}%</p>
                {!!analysis.missing?.length && (
                  <>
                    <p className="text-sm text-muted mt-3">Top Missing Keywords</p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      {analysis.missing.slice(0,8).map((k,i)=><li key={i}>{k}</li>)}
                    </ul>
                  </>
                )}
                <p className="text-sm text-muted mt-3">Suggestions</p>
                <ul className="list-disc pl-5 text-sm mt-1">
                  {analysis.suggestions?.map((s,i)=><li key={i}>{s}</li>)}
                </ul>
              </div>
            )}
          </motion.div>

        </div>
      </div>

      <Footer />
      <Toast open={toast.open} message={toast.message} />
    </main>
  );
}

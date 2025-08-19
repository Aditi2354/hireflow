'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeoButton from "@/components/ui/NeoButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eraser, Beaker } from "lucide-react";

function Toast({ open, message }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[60] rounded-2xl px-4 py-3 text-sm text-white"
         style={{ background: "rgba(139,92,246,.95)", boxShadow: "0 12px 36px rgba(139,92,246,.35)" }}>
      {message}
    </div>
  );
}

export default function ClientDashboard(){
  const [resumeText, setResumeText] = useState("");
  const [jdText, setJdText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open:false, message:'' });

  useEffect(()=>{ if(toast.open){ const t=setTimeout(()=>setToast({open:false,message:''}),1500); return ()=>clearTimeout(t);} },[toast]);

  const runAnalyze = async () => {
    setLoading(true);
    try{
      const res = await fetch("/api/analyze", { method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify({ resumeText, jdText }) });
      const data = await res.json();
      setAnalysis(data);
      setToast({ open:true, message:"Analysis ready!" });
    } finally { setLoading(false); }
  };

  const runQuestions = async () => {
    setLoading(true);
    try{
      const res = await fetch("/api/interview", { method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify({ role }) });
      const data = await res.json();
      setQuestions(data.questions || []);
      setToast({ open:true, message:"Questions loaded!" });
    } finally { setLoading(false); }
  };

  const fillSample = () => {
    setResumeText("Backend Node.js developer with REST APIs, PostgreSQL, Redis, Docker, CI/CD on GitHub Actions. Built scalable services and improved response time by 35%.");
    setJdText("Hiring Backend Node.js developer. Required: Node.js, Express, REST, SQL/NoSQL, Docker, AWS, CI/CD. Nice-to-have: Redis, GraphQL, monitoring.");
  };
  const clearAnalyzer = () => { setResumeText(""); setJdText(""); setAnalysis(null); };
  const clearInterview = () => { setRole(""); setQuestions([]); };

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted mt-2">Use the tools below.</p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35}} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Resume Analyzer</h3>
                <p className="text-sm text-muted mt-1">Paste your resume and the JD (text).</p>
              </div>
              <div className="flex items-center gap-2">
                <NeoButton variant="ghost" size="sm" onClick={fillSample} title="Fill with sample">
                  <Beaker className="h-4 w-4" /> Sample
                </NeoButton>
                <NeoButton variant="ghost" size="sm" onClick={clearAnalyzer} title="Clear">
                  <Eraser className="h-4 w-4" /> Clear
                </NeoButton>
              </div>
            </div>

            <label className="mt-3 block text-xs text-muted">Resume ({resumeText.length} chars)</label>
            <textarea className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10" rows={6} placeholder="Paste resume text..." value={resumeText} onChange={e=>setResumeText(e.target.value)} />
            <label className="mt-3 block text-xs text-muted">Job Description ({jdText.length} chars)</label>
            <textarea className="mt-1 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10" rows={6} placeholder="Paste JD text..." value={jdText} onChange={e=>setJdText(e.target.value)} />
            <NeoButton variant="primary" className="mt-3" loading={loading} onClick={runAnalyze} disabled={!resumeText.trim() || !jdText.trim() || loading}>
              Analyze
            </NeoButton>
            {analysis && (
              <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm text-muted">Match Score</p>
                <p className="text-3xl font-bold mt-1">{Math.round(analysis.score)}%</p>
                {analysis.missing?.length>0 && (<>
                  <p className="text-sm text-muted mt-3">Top Missing Keywords</p>
                  <ul className="list-disc pl-5 text-sm mt-1">{analysis.missing.slice(0,8).map((k,i)=><li key={i}>{k}</li>)}</ul>
                </>)}
                <p className="text-sm text-muted mt-3">Suggestions</p>
                <ul className="list-disc pl-5 text-sm mt-1">{analysis.suggestions.map((s,i)=><li key={i}>{s}</li>)}</ul>
              </div>
            )}
          </motion.div>

          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35, delay:.05}} className="card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Interview Prep</h3>
                <p className="text-sm text-muted mt-1">Type a role to get starter questions.</p>
              </div>
              <NeoButton variant="ghost" size="sm" onClick={clearInterview} title="Clear">
                <Eraser className="h-4 w-4" /> Clear
              </NeoButton>
            </div>

            <input className="mt-3 w-full rounded-xl bg-white/5 p-3 ring-1 ring-white/10" placeholder="e.g., Backend Node.js Developer" value={role} onChange={e=>setRole(e.target.value)} />
            <NeoButton variant="primary" className="mt-3" loading={loading} onClick={runQuestions} disabled={!role.trim() || loading}>
              Get Questions
            </NeoButton>
            {questions.length>0 && (
              <ol className="mt-4 list-decimal pl-6 text-sm space-y-2">{questions.map((q,i)=>(<li key={i}>{q}</li>))}</ol>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
      <Toast open={toast.open} message={toast.message} />
    </main>
  );
}

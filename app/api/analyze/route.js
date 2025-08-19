export async function POST(req){
  const { resumeText = "", jdText = "" } = await req.json();
  const norm = t => (t || "").toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean);
  const stop = new Set(["and","or","the","a","an","to","in","of","with","for","on","at","by","is","are","as","be","this","that"]);
  const freq = arr => arr.reduce((m,w)=>{ if(!stop.has(w)){ m[w]=(m[w]||0)+1 } return m }, {});
  const resumeFreq = freq(norm(resumeText));
  const jdFreq = freq(norm(jdText));
  const jdKeys = Object.keys(jdFreq);
  const intersect = jdKeys.filter(k => resumeFreq[k]);
  const missing = jdKeys.filter(k => !resumeFreq[k]).sort((a,b)=>jdFreq[b]-jdFreq[a]).slice(0,20);
  const totalWeight = jdKeys.reduce((s,k)=>s+jdFreq[k],0) || 1;
  const covered = intersect.reduce((s,k)=>s+jdFreq[k],0);
  const score = (covered/totalWeight)*100;
  const suggestions = [];
  if(missing.length) suggestions.push(`Include or expand on: ${missing.slice(0,8).join(", ")}`);
  suggestions.push("Add measurable impact (%, $, time saved) to your bullet points.");
  suggestions.push("Mirror key terms from the JD naturally in your summary and skills.");
  suggestions.push("Keep bullets action-first (designed, built, led) and quantify outcomes.");
  return new Response(JSON.stringify({ score, missing, suggestions }), { headers: { "content-type": "application/json" } });
}

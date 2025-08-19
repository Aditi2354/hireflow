'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { FileText, MessageSquare, Rocket } from "lucide-react";

const features=[
  { title:"Resume Analyzer", desc:"Get prioritized fixes tailored to your job role.", icon:FileText },
  { title:"JD Matching", desc:"Understand gaps between your resume and the JD.", icon:Rocket },
  { title:"Interview Prep", desc:"Practice with curated questions by role.", icon:MessageSquare },
];
const container={ hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:.08}} };
const item={ hidden:{opacity:0,y:18,scale:.98}, show:{opacity:1,y:0,scale:1,transition:{duration:.45,ease:"easeOut"}} };

export default function MarketingPage(){
  return (
    <main>
      <Navbar />
      <Hero />
      <Section id="features" title="Everything you need to get hired" subtitle="Clean UX. Practical tools.">
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:.2}}>
          {features.map(({title, desc, icon:Icon},i)=>(
            <motion.div key={i} variants={item} className="fancy p-5">
              <div className="flex items-start gap-3">
                <span className="icon-bubble"><Icon className="w-4 h-4" /></span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <Section id="how" title="How it works">
        <motion.ol className="grid sm:grid-cols-3 gap-5" variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:.2}}>
          {["Paste your resume and the JD","Run the analyzer to get a match score","Practice with role-specific questions"].map((t,i)=>(
            <motion.li key={i} variants={item} className="fancy p-5 step">{t}</motion.li>
          ))}
        </motion.ol>
      </Section>
      <Section id="pricing" title="Simple pricing" subtitle="Keep free tier, add pro later.">
        <motion.div className="grid sm:grid-cols-2 gap-5" variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:.2}}>
          <motion.div variants={item} className="fancy p-6"><h3 className="text-xl font-semibold">Free</h3><p className="text-muted mt-1">Resume check • 10 Qs/day</p><p className="text-3xl font-extrabold mt-4">₹0</p></motion.div>
          <motion.div variants={item} className="fancy p-6" style={{boxShadow:'inset 0 0 0 1px rgba(139,92,246,.28)'}}><h3 className="text-xl font-semibold">Pro</h3><p className="text-muted mt-1">Unlimited Qs • Export</p><p className="text-3xl font-extrabold mt-4">₹299/mo</p></motion.div>
        </motion.div>
      </Section>
      <CTA />
      <Footer />
    </main>
  );
}

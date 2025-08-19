'use client';
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import NeoButton from "@/components/ui/NeoButton";

const container = { hidden:{opacity:0}, show:{ opacity:1, transition:{ staggerChildren:.08 } } };
const item = { hidden:{opacity:0,y:18,scale:.98}, show:{opacity:1,y:0,scale:1,transition:{duration:.45,ease:"easeOut"}} };

export default function Hero(){
  const router = useRouter();
  return (
    <section className="relative pt-24 hero-clip">
      <div className="absolute inset-0 -z-10 grad" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, amount:.3 }}
        >
          <div>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Get hired faster with{" "}
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                HireFlow
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg text-muted">
              Resume insights, JD matching, and interview prep — all in a sleek UI.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              {/* soft shine via .shimmer class */}
              <NeoButton
                variant="primary"
                size="lg"
                className="btn-elevate shimmer"
                onClick={() => router.push("/dashboard")}
              >
                Open Dashboard <ArrowRight className="h-4 w-4" />
              </NeoButton>

              <NeoButton
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior:"smooth" })}
              >
                See features
              </NeoButton>
            </motion.div>
          </div>

          <motion.div variants={item} className="card glow">
            <p className="text-sm text-muted">Sample Insight</p>
            <p className="mt-2 text-3xl font-bold">Match Score: 78%</p>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li>Add “REST API” metrics to last role</li>
              <li>Highlight React + Node projects</li>
              <li>Mention Docker/GitHub Actions skills</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

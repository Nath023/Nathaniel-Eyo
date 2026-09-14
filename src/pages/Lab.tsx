import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { experiments } from "../data/lab";
import { ArrowUpRight, Github } from "lucide-react";

export default function Lab() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32 relative"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pattern-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent)] -z-10" />
      <SEO title="Lab" />
      
      <header className="flex flex-col gap-6 max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Experiments & Prototypes</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          Lab
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
          An experimental playground for small tools, web experiments, AI integrations, and side projects. Built to learn, test, and break things.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border mt-16 rounded-2xl overflow-hidden">
        {experiments.map((exp, i) => (
          <div key={i} className="flex flex-col p-8 md:p-12 bg-base group relative overflow-hidden transition-colors hover:bg-surface">
            <div className="absolute -right-4 -top-4 font-mono text-[120px] font-bold text-border/30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 z-0 pointer-events-none">
              {i + 1}
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <span className="text-[10px] font-mono border border-ink text-ink px-3 py-1 rounded-sm uppercase tracking-widest">
                {exp.category}
              </span>
              <span className="text-[10px] font-mono text-muted tabular-nums uppercase tracking-widest">{exp.year}</span>
            </div>
            
            <h3 className="font-serif text-3xl text-ink mb-4 relative z-10">{exp.title}</h3>
            <p className="text-muted leading-relaxed flex-grow relative z-10">
              {exp.description}
            </p>
            
            <div className="flex items-center gap-6 mt-8 relative z-10">
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noreferrer" className="text-xs font-mono uppercase tracking-widest text-ink hover:text-accent transition-colors flex items-center gap-1 group/link">
                  View Live <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              )}
              {exp.github && (
                <a href={exp.github} target="_blank" rel="noreferrer" className="text-xs font-mono uppercase tracking-widest text-ink hover:text-accent transition-colors flex items-center gap-1 group/link">
                  Source Code <Github className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
              {!exp.link && !exp.github && (
                <span className="text-xs font-mono uppercase tracking-widest text-muted border-b border-muted border-dashed pb-0.5">Work in progress</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

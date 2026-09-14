import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { experiments } from "../data/lab";
import { ExternalLink, Github } from "lucide-react";

export default function Lab() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12"
    >
      <SEO title="Lab" />
      
      <header className="flex flex-col gap-4 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl">Lab</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          An experimental playground for small tools, web experiments, AI integrations, and side projects.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {experiments.map((exp, i) => (
          <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md uppercase tracking-wide">
                {exp.category}
              </span>
              <span className="text-xs font-medium text-zinc-400 tabular-nums">{exp.year}</span>
            </div>
            
            <h3 className="font-serif text-xl font-semibold text-zinc-900">{exp.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed flex-grow">
              {exp.description}
            </p>
            
            <div className="flex items-center gap-4 mt-2 pt-4 border-t border-zinc-100">
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition-colors">
                  View <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {exp.github && (
                <a href={exp.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition-colors">
                  Source <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {!exp.link && !exp.github && (
                <span className="text-sm font-medium text-zinc-400 italic">Work in progress</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

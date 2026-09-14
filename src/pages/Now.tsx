import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { profile } from "../data/profile";
import { Activity, BookOpen, Map, Zap } from "lucide-react";

export default function Now() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32 max-w-5xl"
    >
      <SEO title="Now" />
      
      <header className="flex flex-col gap-6 relative">
        <div className="absolute top-0 right-10 flex items-center gap-3 bg-surface border border-border px-4 py-2 rounded-full">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink font-semibold">Live Snapshot</span>
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-muted">Current Focus</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          Now
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
          What I'm focused on right now. <br className="hidden md:block"/>
          <span className="text-sm font-mono tracking-widest uppercase">Last updated: Sept 2026</span>
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        
        <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border flex flex-col gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none group-hover:scale-105 transition-transform duration-1000" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-base flex items-center justify-center border border-border">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-serif text-3xl italic">Building</h2>
          </div>
          <ul className="flex flex-col gap-4 relative z-10">
            {profile.now.building.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-base rounded-xl border border-border/50 shadow-sm">
                <span className="font-mono text-xs text-muted mt-1 tabular-nums">0{index + 1}</span>
                <span className="text-ink leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-surface p-8 md:p-10 rounded-3xl border border-border flex flex-col gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-1000" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-base flex items-center justify-center border border-border">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-serif text-3xl italic">Learning</h2>
          </div>
          <ul className="flex flex-col gap-4 relative z-10">
            {profile.now.learning.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-base rounded-xl border border-border/50 shadow-sm">
                <span className="font-mono text-xs text-muted mt-1 tabular-nums">0{index + 1}</span>
                <span className="text-ink leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 bg-ink text-base p-8 md:p-12 rounded-3xl flex flex-col gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-1000" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Map className="w-4 h-4 text-accent" />
            </div>
            <h2 className="font-serif text-3xl italic text-white">Exploring</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 relative z-10">
            {profile.now.exploring.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs text-muted mt-1 tabular-nums">0{index + 1}</span>
                <span className="text-white leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}

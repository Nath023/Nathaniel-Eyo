import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-24 md:gap-32 pb-16 pt-32"
    >
      <SEO title="About" />
      
      <header className="flex flex-col gap-6 max-w-4xl relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 pattern-dots opacity-20 pointer-events-none -z-10" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">My Story</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          From early curiosity in technology to building digital systems that drive business growth.
        </h1>
      </header>

      <div className="grid md:grid-cols-12 gap-12 md:gap-24 relative">
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="sticky top-32 flex flex-col gap-6">
            <h2 className="font-serif text-3xl">Background</h2>
            <p className="text-muted leading-relaxed">
              {profile.biography.full}
            </p>
            <div className="w-full aspect-[3/4] bg-surface rounded-2xl border border-border mt-4 relative overflow-hidden group">
              <div className="absolute inset-0 pattern-grid opacity-30 group-hover:scale-105 transition-transform duration-700" />
              <img src="https://i.postimg.cc/02F302dT/2024-10-09-16-30-IMG-2332.jpg" alt="Portrait" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-24 relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent hidden md:block" />

          {profile.timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative md:pl-16 flex flex-col gap-4"
            >
              <div className="hidden md:block absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-base" />
              <span className="font-mono text-xs font-medium tracking-widest uppercase text-accent bg-accent/10 w-fit px-3 py-1 rounded-full">{item.period}</span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink">{item.title}</h3>
              <p className="text-muted leading-relaxed text-lg max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:pl-16 flex flex-col gap-8 mt-12"
          >
            <div className="hidden md:block absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-ink ring-4 ring-base" />
            <div className="p-8 bg-surface rounded-2xl border border-border flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 pattern-dots opacity-10 group-hover:opacity-20 transition-opacity" />
              <h3 className="font-serif text-3xl text-ink relative z-10">See what I'm focused on right now.</h3>
              <Link to="/now" className="font-mono text-xs uppercase tracking-widest bg-ink text-white px-6 py-3 rounded-full hover:bg-accent transition-colors w-fit relative z-10">
                View Now Page
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

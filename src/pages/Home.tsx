import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { projects } from "../data/projects";
import { articles } from "../data/writing";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-32 pb-16"
    >
      <SEO />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 flex flex-col gap-12 relative min-h-[70vh] justify-center">
        <div className="absolute top-20 right-10 md:top-32 md:right-32 flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted hidden md:block">Status: Building</span>
        </div>

        <div className="flex flex-col max-w-5xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl italic tracking-tight leading-[0.9] text-ink"
          >
            Digital <br className="md:hidden" /> builder.
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 md:mt-24">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-2xl md:text-3xl text-ink font-light leading-snug">
                {profile.identity.heroTitle}
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-md">
                {profile.identity.heroSubtitle}
              </p>
              <div className="flex items-center gap-6 mt-4">
                <Link to="/work" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1 group">
                  Explore Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link to="/about" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors">
                  Read Profile
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -15, 0] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="hidden md:flex justify-end items-start md:-mt-16 lg:-mt-32 relative z-10"
            >
              <div className="w-64 h-64 border border-border rounded-full flex items-center justify-center relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <div className="absolute inset-0 pattern-grid opacity-50 group-hover:scale-110 transition-transform duration-1000" />
                <img src="https://i.postimg.cc/02F302dT/2024-10-09-16-30-IMG-2332.jpg" alt="Portrait" className="w-full h-full object-cover object-top rounded-full relative z-10" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work (Asymmetric Grid) */}
      <section className="flex flex-col gap-12 border-t border-border pt-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-5xl italic">Selected Work</h2>
          <Link to="/work" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors">View Index &rarr;</Link>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-8">
          {projects.slice(0, 4).map((project, i) => (
            <Link 
              key={project.slug} 
              to={`/projects/${project.slug}`} 
              className={`group flex flex-col gap-6 ${
                i === 0 ? 'md:col-span-8' : 
                i === 1 ? 'md:col-span-4 md:mt-24' : 
                i === 2 ? 'md:col-span-5' : 
                'md:col-span-6 md:col-start-7'
              }`}
            >
              <div className={`w-full overflow-hidden bg-surface rounded-2xl relative ${
                i === 0 ? 'aspect-[16/9]' :
                i === 1 ? 'aspect-[3/4]' :
                i === 2 ? 'aspect-square' :
                'aspect-[4/3]'
              }`}>
                <div className="absolute inset-0 bg-border/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 pattern-grid opacity-30 group-hover:scale-105 transition-transform duration-700" />
                {project.image && (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                )}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {project.technologies.slice(0,2).map(tech => (
                    <span key={tech} className="bg-white/90 backdrop-blur text-ink text-[10px] font-mono px-2 py-1 rounded-sm uppercase tracking-wider">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <h3 className="font-serif text-2xl group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <p className="text-muted text-sm md:w-4/5 ml-7">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Writing */}
      <section className="grid lg:grid-cols-3 gap-16 border-t border-border pt-12">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl italic">Writing</h2>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Thoughts, technical guides, and reflections on building digital products and businesses.
          </p>
          <Link to="/writing" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors w-fit mt-4 flex items-center gap-1 group">
            Read all <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        
        <div className="lg:col-span-2 flex flex-col">
          {articles.slice(0, 3).map((article) => (
            <Link 
              key={article.slug} 
              to={`/writing/${article.slug}`} 
              className="group py-8 border-b border-border last:border-0 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-surface -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-muted uppercase">{article.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">{article.title}</h3>
              </div>
              <span className="font-mono text-sm text-muted shrink-0">{article.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Narrative Intro */}
      <section className="bg-surface rounded-3xl p-8 md:p-24 flex flex-col items-center text-center gap-8 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <span className="font-mono text-xs tracking-widest text-muted uppercase relative z-10">Background</span>
        <h2 className="font-serif text-3xl md:text-5xl max-w-3xl leading-tight relative z-10">
          "I combine technical engineering with strategic business thinking to build tools that actually work for people."
        </h2>
        <Link 
          to="/about" 
          className="font-mono text-xs uppercase tracking-widest bg-ink text-white px-8 py-4 rounded-full hover:bg-accent transition-colors relative z-10 mt-4"
        >
          Read my story
        </Link>
      </section>
    </motion.div>
  );
}

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
      <section className="pt-32 md:pt-48 flex flex-col gap-12 relative min-h-[85vh] justify-center">
        <div className="absolute top-20 right-10 md:top-32 md:right-32 flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted hidden md:block">Available for new opportunities</span>
        </div>

        <div className="flex flex-col relative z-10 w-full">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] italic tracking-tight leading-[0.85] text-ink relative"
          >
            Digital<br />
            <span className="ml-8 sm:ml-16 md:ml-32">builder.</span>
          </motion.h1>
          
          <div className="grid md:grid-cols-12 gap-8 mt-12 md:mt-24 items-end">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 flex flex-col gap-8"
            >
              <h2 className="text-xl md:text-2xl text-ink font-light leading-relaxed">
                {profile.identity.heroTitle}
              </h2>
              <p className="text-muted text-base leading-relaxed max-w-sm">
                {profile.identity.heroSubtitle}
              </p>
              <div className="flex items-center gap-8 mt-4">
                <Link to="/work" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2 group">
                  Explore Work <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link to="/about" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-ink hover:after:w-full after:transition-all after:duration-300">
                  Read Profile
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 2, scale: 1, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.4 },
                rotate: { duration: 1, delay: 0.4, type: "spring" },
                scale: { duration: 1, delay: 0.4, type: "spring" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
              className="hidden md:flex md:col-span-4 md:col-start-9 justify-end items-start relative z-10 -mt-16"
            >
              <div className="w-64 h-[22rem] bg-surface p-2 pb-12 shadow-[0_30px_60px_rgba(0,0,0,0.12)] rotate-2 group relative">
                <div className="absolute inset-0 border border-black/5" />
                <div className="w-full h-full overflow-hidden bg-border relative">
                   <div className="absolute inset-0 pattern-grid opacity-30 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 z-10" />
                   <img src="https://i.postimg.cc/02F302dT/2024-10-09-16-30-IMG-2332.jpg" alt="Portrait" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 relative z-0" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="font-serif italic text-muted text-lg">Nathaniel Eyo</span>
                </div>
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
              <div className={`w-full overflow-hidden bg-surface relative ${
                i === 0 ? 'aspect-[16/9]' :
                i === 1 ? 'aspect-[3/4]' :
                i === 2 ? 'aspect-square' :
                'aspect-[4/3]'
              }`}>
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                
                {/* Big decorative number */}
                <div className="absolute -bottom-8 -right-4 font-serif italic text-[12rem] leading-none text-white/40 mix-blend-overlay pointer-events-none z-20 group-hover:text-white/60 transition-colors duration-700">
                  {i + 1}
                </div>

                {project.image && (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" referrerPolicy="no-referrer" />
                )}
                
                {/* Top bar tech stack */}
                <div className="absolute top-0 left-0 w-full p-4 flex gap-2 z-20 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.technologies.slice(0,2).map(tech => (
                    <span key={tech} className="bg-white/90 backdrop-blur text-ink text-[10px] font-mono px-2 py-1 uppercase tracking-wider">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-3xl group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted text-sm md:w-4/5 leading-relaxed">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Writing */}
      <section className="grid lg:grid-cols-3 gap-16 border-t border-border pt-16 mt-16">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl italic">Writing</h2>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Thoughts, technical guides, and reflections on building digital products and businesses.
          </p>
          <Link to="/writing" className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors w-fit mt-4 flex items-center gap-1 group">
            Read all <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        
        <div className="lg:col-span-2 flex flex-col border-t border-border">
          {articles.slice(0, 3).map((article) => (
            <Link 
              key={article.slug} 
              to={`/writing/${article.slug}`} 
              className="group py-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-surface/50 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1] -z-10" />
              <div className="flex flex-col gap-2 transform group-hover:translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <span className="font-mono text-xs tracking-widest text-muted uppercase">{article.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl group-hover:italic transition-all duration-500">{article.title}</h3>
              </div>
              <span className="font-mono text-sm text-muted shrink-0 transform group-hover:-translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1]">{article.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Narrative Intro */}
      <section className="bg-ink text-surface py-24 md:py-48 px-8 md:px-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center text-center gap-12 mt-32 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-[0.05] pointer-events-none" />
        <span className="font-mono text-xs tracking-widest text-surface/50 uppercase relative z-10">Background</span>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1] relative z-10 text-balance">
          "I combine technical engineering with strategic business thinking to build tools that <i className="text-accent">actually work</i> for people."
        </h2>
        <Link 
          to="/about" 
          className="font-mono text-xs uppercase tracking-widest border border-surface/20 text-surface px-10 py-5 rounded-full hover:bg-surface hover:text-ink transition-colors relative z-10 mt-8"
        >
          Read my story
        </Link>
      </section>
    </motion.div>
  );
}

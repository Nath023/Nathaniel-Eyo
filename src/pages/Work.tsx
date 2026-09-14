import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32"
    >
      <SEO title="Selected Work" />
      
      <header className="flex flex-col gap-6 max-w-4xl relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 pattern-grid opacity-30 pointer-events-none -z-10" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Portfolio Index</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          Selected Work
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
          A collection of digital products, platforms, and business systems I've architected and built.
        </p>
      </header>

      <div className="flex flex-col gap-32 mt-16 relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -z-10" />

        {projects.map((project, index) => (
          <motion.div 
            key={project.slug} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
          >
            <Link to={`/projects/${project.slug}`} className={`group block overflow-hidden rounded-2xl bg-surface relative aspect-[4/3] w-full ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
              <div className="absolute inset-0 bg-border/20 group-hover:bg-transparent transition-colors z-10" />
              <div className="absolute inset-0 pattern-dots opacity-20 group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-2xl text-muted mix-blend-multiply opacity-50 z-0">
                Project Visual
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent z-20 flex gap-2">
                {project.technologies.slice(0,3).map(tech => (
                  <span key={tech} className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-mono px-2 py-1 rounded-sm uppercase tracking-wider">{tech}</span>
                ))}
              </div>
            </Link>

            <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted">0{index + 1}</span>
                <div className="h-px bg-border flex-1" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted">{project.year}</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">{project.title}</h2>
              <p className="text-muted text-lg leading-relaxed">{project.shortDescription}</p>
              
              <Link to={`/projects/${project.slug}`} className="font-mono text-xs uppercase tracking-widest text-ink hover:text-accent transition-colors w-fit mt-4 pb-1 border-b border-ink hover:border-accent">
                Read Case Study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

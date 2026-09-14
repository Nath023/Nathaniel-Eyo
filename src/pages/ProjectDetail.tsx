import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="py-32 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-serif">Project not found</h1>
        <Link to="/work" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors">Return to index</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col pt-24 pb-16"
    >
      <SEO title={project.title} description={project.shortDescription} />
      
      <header className="flex flex-col gap-12 max-w-5xl">
        <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors w-fit group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Index
        </Link>
        
        <div className="flex flex-col gap-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-none">{project.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted">
            <span className="text-ink">{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.role}</span>
          </div>
          
          <p className="text-xl md:text-3xl text-ink font-light leading-snug max-w-3xl mt-4">
            {project.shortDescription}
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface rounded-none md:rounded-3xl overflow-hidden mt-16 relative -mx-6 md:mx-0 w-[calc(100%+3rem)] md:w-full group"
      >
        <div className="absolute inset-0 pattern-grid opacity-30 group-hover:scale-105 transition-transform duration-1000" />
        {project.image ? (
           <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="font-serif italic text-3xl md:text-5xl text-muted mix-blend-multiply opacity-50">Project Visual</span>
          </div>
        )}
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mt-16 md:mt-32 max-w-6xl mx-auto w-full">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 flex flex-col gap-12 sticky top-32 h-fit">
          <div className="flex flex-col gap-8 p-8 bg-surface rounded-2xl border border-border">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between w-full pb-4 border-b border-border group hover:text-accent transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Visit Live Site</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
            
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-white border border-border text-ink px-3 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">My Role</span>
              <p className="text-sm font-medium leading-relaxed">{project.role}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-24">
          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl italic">Overview</h2>
            <p className="text-lg text-muted leading-relaxed">{project.overview}</p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl italic">The Problem</h2>
            <p className="text-lg text-muted leading-relaxed">{project.problem}</p>
          </section>

          <div className="w-full aspect-video bg-surface rounded-2xl overflow-hidden relative group">
             <div className="absolute inset-0 pattern-dots opacity-20 group-hover:scale-105 transition-transform duration-1000" />
             {project.secondaryImage ? (
                <img src={project.secondaryImage} alt={`${project.title} Interface`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
             ) : (
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-serif italic text-2xl text-muted mix-blend-multiply opacity-50">Interface Detail</span>
               </div>
             )}
          </div>

          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl italic">My Approach</h2>
            <p className="text-lg text-muted leading-relaxed">{project.approach}</p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl italic">The Outcome</h2>
            <p className="text-lg text-muted leading-relaxed">{project.outcome}</p>
          </section>

          <section className="flex flex-col gap-6 p-8 bg-surface rounded-2xl border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 pattern-grid opacity-20 -z-10" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Retrospective</span>
            <h2 className="font-serif text-3xl">Lessons Learned</h2>
            <p className="text-lg text-ink leading-relaxed">{project.lessonsLearned}</p>
          </section>
        </div>
      </div>
      
      {/* Next Project Teaser (Placeholder) */}
      <div className="mt-32 pt-16 border-t border-border flex flex-col items-center justify-center text-center gap-6">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Continue Exploring</span>
        <h2 className="font-serif text-5xl md:text-6xl italic">More Work</h2>
        <Link to="/work" className="font-mono text-xs uppercase tracking-widest bg-ink text-white px-8 py-4 rounded-full hover:bg-accent transition-colors mt-4">
          Back to Index
        </Link>
      </div>
    </motion.div>
  );
}

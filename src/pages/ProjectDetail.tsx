import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl font-serif">Project not found</h1>
        <Link to="/work" className="text-zinc-500 hover:text-zinc-900 underline">Return to work</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-16 max-w-4xl mx-auto"
    >
      <SEO title={project.title} description={project.shortDescription} />
      
      <header className="flex flex-col gap-8">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Back to work
        </Link>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-sm font-medium text-zinc-500 uppercase tracking-widest">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-zinc-900">{project.title}</h1>
          <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors w-fit mt-4"
          >
            Visit Live Site <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </header>

      {/* Hero Image */}
      <div className="aspect-[16/9] w-full bg-zinc-50 pattern-grid rounded-3xl overflow-hidden border border-zinc-200/50 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/80 to-transparent" />
        <span className="text-zinc-500 font-serif italic relative z-10 bg-white/80 px-6 py-3 rounded-full border border-zinc-200/50 text-sm md:text-base backdrop-blur-sm shadow-sm">Main Project Screenshot Placeholder</span>
      </div>

      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        {/* Sidebar Info */}
        <div className="md:col-span-4 flex flex-col gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-900 uppercase tracking-widest text-xs">My Role</h3>
            <p className="text-zinc-600">{project.role}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-900 uppercase tracking-widest text-xs">Technologies</h3>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <li key={tech} className="bg-zinc-100 border border-zinc-200 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 flex flex-col gap-12 prose prose-zinc max-w-none text-zinc-700">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Overview</h2>
            <p className="leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">The Problem</h2>
            <p className="leading-relaxed">{project.problem}</p>
          </section>

          <div className="aspect-video w-full bg-zinc-50 pattern-grid rounded-2xl overflow-hidden border border-zinc-200/50 flex items-center justify-center my-4 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent" />
             <span className="text-zinc-500 font-serif italic relative z-10 bg-white/80 px-4 py-2 rounded-full border border-zinc-200/50 text-sm backdrop-blur-sm shadow-sm">Detail Screenshot Placeholder</span>
          </div>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Approach</h2>
            <p className="leading-relaxed">{project.approach}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Outcome</h2>
            <p className="leading-relaxed">{project.outcome}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Lessons Learned</h2>
            <p className="leading-relaxed">{project.lessonsLearned}</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

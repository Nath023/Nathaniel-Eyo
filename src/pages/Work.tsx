import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12"
    >
      <SEO title="Work" />
      
      <header className="flex flex-col gap-4 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl">Selected Work</h1>
        <p className="text-xl text-zinc-600 font-light leading-relaxed">
          A collection of digital products, platforms, and business systems I've built.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-8">
        {projects.map((project, index) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="group flex flex-col gap-6">
            <div className="aspect-[4/3] bg-zinc-50 pattern-grid rounded-3xl overflow-hidden border border-zinc-200/50 flex items-center justify-center p-8 transition-all group-hover:shadow-md group-hover:border-zinc-300 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent" />
              <span className="text-zinc-500 font-serif italic text-center relative z-10 bg-white/80 px-4 py-2 rounded-full border border-zinc-200/50 text-sm backdrop-blur-sm shadow-sm">Image Placeholder: {project.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-2xl font-semibold text-zinc-900">{project.title}</h2>
                <span className="text-xs font-medium px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md">{project.year}</span>
              </div>
              <p className="text-zinc-600 leading-relaxed">{project.shortDescription}</p>
              <div className="flex items-center gap-1 text-sm font-medium text-zinc-900 mt-2 group-hover:underline underline-offset-4">
                Read case study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

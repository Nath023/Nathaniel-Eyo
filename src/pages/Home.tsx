import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { projects } from "../data/projects";
import { articles } from "../data/writing";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-24"
    >
      <SEO />
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center gap-6 pt-10 md:pt-20 min-h-[50vh]">
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-zinc-900 leading-[1.1]">
          {profile.identity.name}.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl leading-relaxed">
          {profile.identity.heroTitle} <br className="hidden md:block"/>
          {profile.identity.heroSubtitle}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Link 
            to="/work" 
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
          >
            View my work
          </Link>
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white border border-zinc-200 text-zinc-900 font-medium hover:bg-zinc-50 transition-colors"
          >
            Read my story
          </Link>
        </div>
      </section>

      {/* Selected Work */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Selected Work</h2>
          <Link to="/work" className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:opacity-70 transition-opacity">
            All work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="group flex flex-col gap-4">
              <div className="aspect-[4/3] bg-zinc-50 pattern-grid rounded-2xl overflow-hidden border border-zinc-200/50 flex items-center justify-center p-8 transition-transform group-hover:scale-[1.02] duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent" />
                <span className="text-zinc-500 font-serif italic text-xl relative z-10 bg-white/80 px-4 py-2 rounded-full border border-zinc-200/50 text-sm backdrop-blur-sm shadow-sm">Image Placeholder</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What I Do & Current Focus */}
      <section className="grid md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl">What I do</h2>
          <p className="text-zinc-600 leading-relaxed">
            {profile.biography.short}
          </p>
          <Link to="/about" className="text-sm font-medium underline underline-offset-4 hover:opacity-70 transition-opacity w-fit">
            More about my background
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl">Current focus</h2>
          <ul className="flex flex-col gap-4 text-zinc-600">
            {profile.now.learning.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected Writing */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Selected Writing</h2>
          <Link to="/writing" className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:opacity-70 transition-opacity">
            All writing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} to={`/writing/${article.slug}`} className="group py-6 border-b border-zinc-200/50 last:border-0 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <h3 className="font-medium text-lg group-hover:text-zinc-500 transition-colors">{article.title}</h3>
              <span className="text-sm text-zinc-400 tabular-nums shrink-0">{article.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zinc-900 text-white rounded-3xl p-10 md:p-16 flex flex-col items-center text-center gap-6 mt-10">
        <h2 className="font-serif text-4xl">Let's build together.</h2>
        <p className="text-zinc-400 max-w-md mx-auto">
          I'm currently open to new opportunities, freelance projects, and interesting conversations.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors mt-4"
        >
          Get in touch
        </Link>
      </section>
    </motion.div>
  );
}

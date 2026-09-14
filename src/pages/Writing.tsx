import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { articles } from "../data/writing";

export default function Writing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-3xl"
    >
      <SEO title="Writing" />
      
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl md:text-5xl">Writing</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          Thoughts, technical tutorials, and digital strategy insights.
        </p>
      </header>

      <div className="flex flex-col mt-8">
        {articles.map((article) => (
          <Link 
            key={article.slug} 
            to={`/writing/${article.slug}`} 
            className="group py-8 border-b border-zinc-200/50 last:border-0 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3 text-xs font-medium text-zinc-400 uppercase tracking-widest">
              <span>{article.category}</span>
              <span>•</span>
              <span className="tabular-nums">{article.date}</span>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
              {article.title}
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
            <div className="text-sm font-medium text-zinc-900 mt-2 flex items-center gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              Read article &rarr;
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

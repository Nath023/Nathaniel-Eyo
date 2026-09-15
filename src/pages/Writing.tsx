import { useState } from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { articles } from "../data/writing";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const ARTICLES_PER_PAGE = 6;

export default function Writing() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const featured = articles[0];
  const archiveArticles = articles.slice(1);
  
  const totalPages = Math.ceil(archiveArticles.length / ARTICLES_PER_PAGE);
  
  // Calculate the slice of articles to show on the current page
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = archiveArticles.slice(startIndex, endIndex);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32"
    >
      <SEO title="Writing" />
      
      <header className="flex flex-col gap-6 max-w-4xl relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 pattern-dots opacity-20 pointer-events-none -z-10" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Editorial</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          Writing
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
          Thoughts, technical guides, and reflections on building digital products.
        </p>
      </header>

      {/* Featured Article - Only show on page 1 */}
      {currentPage === 1 && (
        <div className="mt-12">
          <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block border-b border-border pb-2">Featured</span>
          <Link to={`/writing/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="w-full aspect-video bg-surface rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 pattern-grid opacity-30 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-border/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
                <span className="text-accent">{featured.category}</span>
                <span>/</span>
                <span>{featured.date}</span>
                <span>/</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl italic leading-tight group-hover:text-accent transition-colors">{featured.title}</h2>
              <p className="text-lg text-muted leading-relaxed mt-2">{featured.excerpt}</p>
              <div className="font-mono text-xs uppercase tracking-widest flex items-center gap-1 mt-4 group-hover:text-accent transition-colors">
                Read Article <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      )}

      <div className={`flex flex-col ${currentPage === 1 ? 'mt-16 pt-16 border-t border-border' : 'mt-8'}`}>
        <span className="font-mono text-xs uppercase tracking-widest text-muted mb-8 block">Archive</span>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {currentArticles.map((article) => (
            <Link 
              key={article.slug} 
              to={`/writing/${article.slug}`} 
              className="group flex flex-col gap-4 p-8 bg-surface rounded-2xl border border-border relative overflow-hidden"
            >
              <div className="absolute inset-0 pattern-dots opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">{article.category}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">{article.date}</span>
              </div>
              <h3 className="font-serif text-3xl leading-tight group-hover:text-accent transition-colors relative z-10">
                {article.title}
              </h3>
              <p className="text-muted leading-relaxed relative z-10">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-24">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 border border-border rounded-full hover:bg-surface disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              aria-label="Previous page"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-sm text-muted">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 border border-border rounded-full hover:bg-surface disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
              aria-label="Next page"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/writing";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-32 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-serif">Article not found</h1>
        <Link to="/writing" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors">Return to writing</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col pt-24 pb-16 items-center relative"
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-surface/50 pattern-grid opacity-30 -z-10" />
      <SEO title={article.title} description={article.excerpt} />
      
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <Link to="/writing" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors w-fit group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Writing
        </Link>
        
        <header className="flex flex-col gap-6 md:gap-8 pb-12 border-b border-border mt-4 md:mt-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-mono tracking-widest uppercase text-muted">
            <span className="text-accent">{article.category}</span>
            <span>/</span>
            <span>{article.date}</span>
            <span>/</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] text-ink text-balance">{article.title}</h1>
        </header>

        <div className="prose max-w-none text-ink font-sans w-full
          prose-h1:hidden
          prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tighter prose-headings:text-ink 
          prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 
          prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
          prose-p:leading-[1.8] prose-p:text-[1.05rem] md:prose-p:text-[1.125rem] prose-p:mb-8 prose-p:text-ink/80
          prose-li:text-[1.05rem] md:prose-li:text-[1.125rem] prose-li:text-ink/80 prose-li:leading-[1.8]
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
          prose-a:text-accent prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-ink transition-colors
          prose-code:font-mono prose-code:text-[0.85em] prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-ink
          prose-img:rounded-2xl md:prose-img:rounded-3xl prose-img:border prose-img:border-border prose-img:w-full prose-img:my-12 md:prose-img:my-16 prose-img:shadow-sm
          prose-strong:font-medium prose-strong:text-ink 
          prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-xl md:prose-blockquote:text-2xl prose-blockquote:text-ink/70"
        >
          <Markdown>{article.content}</Markdown>
        </div>
        
        <footer className="mt-16 pt-16 border-t border-border flex flex-col items-center gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">End of article</span>
          <Link 
            to="/writing" 
            className="font-mono text-xs uppercase tracking-widest bg-ink text-white px-8 py-4 rounded-full hover:bg-accent transition-colors"
          >
            Read more articles
          </Link>
        </footer>
      </div>
    </motion.div>
  );
}

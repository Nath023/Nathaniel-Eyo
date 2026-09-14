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
        
        <header className="flex flex-col gap-8 pb-12 border-b border-border">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-widest uppercase text-muted">
            <span className="text-accent">{article.category}</span>
            <span>/</span>
            <span>{article.date}</span>
            <span>/</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl italic leading-tight">{article.title}</h1>
        </header>

        <div className="prose prose-lg max-w-none text-ink
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-h2:text-4xl prose-h3:text-2xl prose-h2:italic
          prose-p:leading-relaxed prose-p:text-lg prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:font-mono prose-code:text-sm prose-code:bg-surface prose-code:px-1 prose-code:rounded
          prose-img:rounded-2xl prose-img:border prose-img:border-border prose-img:w-full prose-img:my-12
          prose-strong:font-semibold prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:font-serif prose-blockquote:italic"
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

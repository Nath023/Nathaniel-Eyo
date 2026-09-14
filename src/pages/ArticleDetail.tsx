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
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl font-serif">Article not found</h1>
        <Link to="/writing" className="text-zinc-500 hover:text-zinc-900 underline">Return to writing</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-2xl mx-auto"
    >
      <SEO title={article.title} description={article.excerpt} />
      
      <header className="flex flex-col gap-8 text-center items-center pb-8 border-b border-zinc-200/50">
        <Link to="/writing" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Back to writing
        </Link>
        
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-3 text-xs font-medium text-zinc-400 uppercase tracking-widest">
            <span>{article.category}</span>
            <span>•</span>
            <span className="tabular-nums">{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-zinc-900 leading-tight">
            {article.title}
          </h1>
        </div>
      </header>

      <div className="prose prose-zinc prose-lg prose-p:leading-relaxed prose-headings:font-serif prose-headings:font-semibold max-w-none text-zinc-700">
        <Markdown>{article.content}</Markdown>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-zinc-200/50 flex justify-center">
        <Link 
          to="/writing" 
          className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
        >
          Read more articles
        </Link>
      </footer>
    </motion.div>
  );
}

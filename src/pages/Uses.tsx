import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export default function Uses() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-3xl"
    >
      <SEO title="Uses" />
      
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl md:text-5xl">Uses</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          The tools, hardware, and software I use daily to build digital products.
        </p>
      </header>

      <div className="flex flex-col gap-12 mt-8 prose prose-zinc max-w-none text-zinc-700">
        
        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200/50">Development Tools</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">React & TypeScript</strong>
              <span className="text-sm text-zinc-500">My preferred modern frontend stack for building robust, scalable interfaces.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">WordPress & Custom PHP</strong>
              <span className="text-sm text-zinc-500">Essential for client CMS projects, allowing for highly customized, SEO-friendly architectures.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Tailwind CSS</strong>
              <span className="text-sm text-zinc-500">For rapid, consistent styling and translating designs efficiently.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Node.js</strong>
              <span className="text-sm text-zinc-500">Powering my backend integrations, automation scripts, and API services.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200/50">Design & Productivity</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Figma</strong>
              <span className="text-sm text-zinc-500">Where all visual ideas and UI systems are born before they hit code.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Notion</strong>
              <span className="text-sm text-zinc-500">My second brain. Used for project management, documentation, and drafting articles.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Linear</strong>
              <span className="text-sm text-zinc-500">For strict issue tracking on complex technical projects.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200/50">Hardware</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">MacBook Pro 14"</strong>
              <span className="text-sm text-zinc-500">Apple Silicon provides the perfect balance of power and battery life for development.</span>
            </li>
            <li className="pl-0 mt-0">
              <strong className="block text-zinc-900 font-medium">Dell 27" 4K Monitor</strong>
              <span className="text-sm text-zinc-500">Essential screen real estate for having design and code side-by-side.</span>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}

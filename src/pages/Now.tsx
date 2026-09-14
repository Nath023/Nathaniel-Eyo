import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { profile } from "../data/profile";

export default function Now() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-2xl"
    >
      <SEO title="Now" />
      
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl md:text-5xl">Now</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          What I'm focused on right now. <br className="hidden md:block"/>
          <span className="text-sm">Updated September 2026.</span>
        </p>
      </header>

      <div className="flex flex-col gap-12 mt-8 prose prose-zinc prose-p:leading-relaxed max-w-none text-zinc-700">
        
        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Building</h2>
          <ul className="space-y-2">
            {profile.now.building.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Learning</h2>
          <ul className="space-y-2">
            {profile.now.learning.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Exploring</h2>
          <ul className="space-y-2">
            {profile.now.exploring.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

      </div>
    </motion.div>
  );
}

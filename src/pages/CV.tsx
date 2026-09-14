import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Download } from "lucide-react";
import { profile } from "../data/profile";

export default function CV() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-3xl mx-auto"
    >
      <SEO title="Curriculum Vitae" />
      
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/50">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl md:text-5xl">Curriculum Vitae</h1>
          <p className="text-lg text-zinc-500">{profile.identity.name} — {profile.identity.primaryTitle}</p>
        </div>
        <button 
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors w-fit text-sm print:hidden"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </header>

      <div className="flex flex-col gap-16 text-zinc-700">
        
        <section className="flex flex-col gap-6">
          <h2 className="font-serif text-2xl font-semibold text-zinc-900">Experience</h2>
          
          <div className="flex flex-col gap-8">
            {profile.experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-48 shrink-0 text-sm font-medium text-zinc-500">{exp.years}</div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-zinc-900 text-lg">{exp.role}</h3>
                  <span className="text-zinc-500 text-sm">{exp.company}</span>
                  <p className="text-sm leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-serif text-2xl font-semibold text-zinc-900">Core Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400">Engineering</h3>
              <ul className="text-sm space-y-1">
                {profile.skills.engineering.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-400">Strategy & Tools</h3>
              <ul className="text-sm space-y-1">
                {profile.skills.strategy.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-serif text-2xl font-semibold text-zinc-900">Education & Certifications</h2>
          <div className="flex flex-col gap-8">
            {profile.education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-48 shrink-0 text-sm font-medium text-zinc-500">{edu.years}</div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-zinc-900">{edu.degree}</h3>
                  <span className="text-zinc-500 text-sm">{edu.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}

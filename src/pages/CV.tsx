import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Printer } from "lucide-react";
import { profile } from "../data/profile";

export default function CV() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32 max-w-5xl"
    >
      <SEO title="Curriculum Vitae" />
      
      <header className="flex flex-col gap-8 relative print:hidden">
        <div className="absolute -top-16 -left-16 w-32 h-32 pattern-grid opacity-30 pointer-events-none -z-10" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Professional Record</span>
            <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
              Curriculum Vitae
            </h1>
            <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
              A comprehensive record of my professional experience, education, and technical competencies.
            </p>
          </div>
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-white font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors w-fit shrink-0"
          >
            <Printer className="w-4 h-4" /> Print PDF
          </button>
        </div>
      </header>

      {/* Print Document Area */}
      <div className="bg-white md:p-16 rounded-3xl md:border border-border md:shadow-sm print:p-0 print:border-none print:shadow-none text-ink">
        
        {/* Print Header */}
        <div className="hidden print:flex flex-col gap-2 pb-8 border-b border-border mb-8">
          <h1 className="font-serif text-4xl">{profile.identity.name}</h1>
          <p className="text-muted font-mono text-sm">{profile.identity.primaryTitle}</p>
          <div className="flex gap-4 text-xs font-mono text-muted mt-2">
            <span>{profile.contact.email}</span>
            <span>{profile.contact.phone}</span>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          
          <section className="flex flex-col gap-10">
            <h2 className="font-serif text-3xl italic pb-4 border-b border-border">Experience</h2>
            
            <div className="flex flex-col gap-12">
              {profile.experience.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
                  <div className="md:w-48 shrink-0 font-mono text-xs uppercase tracking-widest text-muted pt-1">
                    {exp.years}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-ink leading-tight">{exp.role}</h3>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent mt-2 block">{exp.company}</span>
                    </div>
                    <p className="text-muted leading-relaxed whitespace-pre-wrap font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-10">
            <h2 className="font-serif text-3xl italic pb-4 border-b border-border">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.engineering.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 border border-border rounded-sm text-xs font-mono text-ink bg-surface">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-muted">Strategy & Design</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.strategy.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 border border-border rounded-sm text-xs font-mono text-ink bg-surface">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-10">
            <h2 className="font-serif text-3xl italic pb-4 border-b border-border">Education & Certifications</h2>
            <div className="flex flex-col gap-8">
              {profile.education.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-48 shrink-0 font-mono text-xs uppercase tracking-widest text-muted pt-1">
                    {edu.years}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl text-ink leading-tight">{edu.degree}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">{edu.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}

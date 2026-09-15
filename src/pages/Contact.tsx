import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-12 pb-16 pt-32 max-w-4xl"
    >
      <SEO title="Contact" />
      
      <header className="flex flex-col gap-6 relative">
        <div className="absolute -top-16 -left-16 w-32 h-32 pattern-grid opacity-30 pointer-events-none -z-10" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Correspondence</span>
        <h1 className="font-serif text-5xl md:text-7xl italic leading-tight">
          Let's connect.
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl">
          Interested in working together, have a question, or just want to discuss digital architecture? I'm always open to interesting conversations.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 mt-16 pt-16 border-t border-border">
        
        {/* Contact Form */}
        <div className="flex flex-col gap-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Send a Message</span>
          <form action="https://formsubmit.co/eyonathaniel@gmail.com" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">Name</label>
              <input type="text" name="name" id="name" required className="w-full bg-surface border border-border rounded-xl p-4 text-ink focus:outline-none focus:border-accent transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">Email</label>
              <input type="email" name="email" id="email" required className="w-full bg-surface border border-border rounded-xl p-4 text-ink focus:outline-none focus:border-accent transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">Message</label>
              <textarea name="message" id="message" required rows={5} className="w-full bg-surface border border-border rounded-xl p-4 text-ink focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
            </div>
            
            <button type="submit" className="w-fit font-mono text-xs uppercase tracking-widest bg-ink text-white px-8 py-4 rounded-full hover:bg-accent transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Electronic Mail</span>
              <a href={`mailto:${profile.contact.email}`} className="font-serif text-3xl md:text-4xl text-ink hover:text-accent transition-colors w-fit border-b-2 border-transparent hover:border-accent pb-1 break-all">
                {profile.contact.email}
              </a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Direct Line</span>
              <span className="font-serif text-2xl text-ink">
                {profile.contact.phone}
              </span>
            </div>
          </div>
  
          {/* Digital Presence */}
          <div className="flex flex-col gap-8">
             <span className="font-mono text-xs uppercase tracking-widest text-muted">Digital Presence</span>
             <div className="flex flex-col gap-4">
               <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-surface rounded-2xl border border-border group hover:border-accent transition-colors">
                 <div className="flex items-center gap-4">
                   <Linkedin className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                   <span className="font-medium text-ink">LinkedIn Profile</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </a>
               
               <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-surface rounded-2xl border border-border group hover:border-accent transition-colors">
                 <div className="flex items-center gap-4">
                   <span className="font-serif italic text-xl font-bold leading-none text-muted group-hover:text-accent transition-colors">X</span>
                   <span className="font-medium text-ink">Twitter Updates</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </a>
               
               <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-surface rounded-2xl border border-border group hover:border-accent transition-colors">
                 <div className="flex items-center gap-4">
                   <Github className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                   <span className="font-medium text-ink">GitHub Repositories</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </a>
             </div>
          </div>
        </div>
      </div>
      
      <div className="mt-32 w-full aspect-[21/9] bg-surface rounded-3xl border border-border relative overflow-hidden flex flex-col items-center justify-center text-center p-8 group">
         <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-1000" />
         <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
         
         <div className="relative z-10 flex flex-col items-center gap-4">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-border mb-4 overflow-hidden">
             <img src="https://i.postimg.cc/02F302dT/2024-10-09-16-30-IMG-2332.jpg" alt="Portrait" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
           </div>
           <h2 className="font-serif text-3xl">Nathaniel Eyo</h2>
           <p className="font-mono text-xs uppercase tracking-widest text-muted">Abuja, Nigeria</p>
         </div>
      </div>
    </motion.div>
  );
}

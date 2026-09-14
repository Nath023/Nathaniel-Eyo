import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12 max-w-4xl mx-auto w-full"
    >
      <SEO title="Contact" />
      
      <header className="flex flex-col gap-4 text-center items-center">
        <h1 className="font-serif text-4xl md:text-6xl">Let's connect.</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl">
          Interested in working together, have a question, or just want to say hi? I'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-8 bg-zinc-100/50 p-8 md:p-12 rounded-3xl border border-zinc-200/50">
          <h2 className="font-serif text-2xl font-semibold text-zinc-900">Get in touch</h2>
          <div className="flex flex-col gap-6">
            <a href={`mailto:${profile.contact.email}`} className="group flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-widest text-zinc-400">Email</span>
                <span className="font-medium text-lg">{profile.contact.email}</span>
              </div>
            </a>
            
            <div className="group flex items-center gap-4 text-zinc-600">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200">
                <span className="font-serif italic text-lg">Ph</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-widest text-zinc-400">Phone</span>
                <span className="font-medium text-lg">{profile.contact.phone}</span>
              </div>
            </div>

            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-widest text-zinc-400">LinkedIn</span>
                <span className="font-medium text-lg">nathaniel-eyo</span>
              </div>
            </a>

            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                <span className="font-serif italic text-xl font-medium leading-none">X</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-widest text-zinc-400">Twitter / X</span>
                <span className="font-medium text-lg">{profile.socials.twitter.split('/').pop()}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 p-8 md:p-12">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-700">Name</label>
              <input 
                type="text" 
                id="name" 
                className="h-12 px-4 rounded-xl bg-white border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all w-full"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="h-12 px-4 rounded-xl bg-white border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all w-full"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="p-4 rounded-xl bg-white border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all w-full resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit"
              className="h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors w-full mt-2"
            >
              Send Message
            </button>
            <p className="text-xs text-center text-zinc-400">
              * This is a placeholder form. No data will be sent.
            </p>
          </form>
        </div>

      </div>
    </motion.div>
  );
}

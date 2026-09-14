import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-base print:hidden overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-end mb-24">
          <div className="flex flex-col gap-6 max-w-md">
            <span className="font-mono text-xs tracking-widest text-muted uppercase">Digital presence</span>
            <h2 className="font-serif text-5xl md:text-7xl italic leading-none">{profile.identity.name}.</h2>
            <p className="text-muted text-lg mt-4">{profile.identity.heroSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-widest text-muted uppercase">Navigate</span>
              <NavLink to="/work" className="hover:text-accent transition-colors w-fit">Selected Work</NavLink>
              <NavLink to="/about" className="hover:text-accent transition-colors w-fit">About Me</NavLink>
              <NavLink to="/writing" className="hover:text-accent transition-colors w-fit">Writing</NavLink>
              <NavLink to="/lab" className="hover:text-accent transition-colors w-fit">Lab / Experiements</NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-widest text-muted uppercase">Connect</span>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-1 hover:text-accent transition-colors w-fit">
                LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="group flex items-center gap-1 hover:text-accent transition-colors w-fit">
                Twitter/X <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="group flex items-center gap-1 hover:text-accent transition-colors w-fit">
                GitHub <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a href={`mailto:${profile.contact.email}`} className="group flex items-center gap-1 hover:text-accent transition-colors w-fit mt-4 font-medium text-ink">
                {profile.contact.email} <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          <div className="flex gap-6 text-sm font-mono text-muted">
            <NavLink to="/cv" className="hover:text-accent transition-colors">CV / Resume</NavLink>
            <NavLink to="/uses" className="hover:text-accent transition-colors">Uses</NavLink>
          </div>
          <p className="text-xs font-mono text-muted">
            &copy; {new Date().getFullYear()} {profile.identity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

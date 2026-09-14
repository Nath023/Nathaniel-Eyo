import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 bg-zinc-50 mt-24 print:hidden">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-serif italic font-semibold text-lg">{profile.identity.name}.</span>
          <span className="text-sm text-zinc-500">{profile.identity.primaryTitle}</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-zinc-500 font-medium">
          <NavLink to="/uses" className="hover:text-zinc-900 transition-colors">Uses</NavLink>
          <NavLink to="/cv" className="hover:text-zinc-900 transition-colors">CV</NavLink>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">Twitter / X</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 pb-8 text-center md:text-left text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} {profile.identity.name}. All rights reserved.
      </div>
    </footer>
  );
}

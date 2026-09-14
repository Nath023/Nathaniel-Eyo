import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "../data/profile";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Writing", path: "/writing" },
  { name: "Lab", path: "/lab" },
  { name: "Now", path: "/now" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50 print:hidden">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="font-serif italic font-semibold text-lg tracking-wide hover:opacity-70 transition-opacity z-50 relative"
        >
          {profile.identity.name}.
        </NavLink>
        
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-zinc-900",
                  isActive ? "text-zinc-900" : "text-zinc-500"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button 
          className="md:hidden flex items-center justify-center p-2 -mr-2 z-50 relative text-zinc-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-zinc-50 border-b border-zinc-200/50 shadow-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium transition-colors hover:text-zinc-900",
                      isActive ? "text-zinc-900" : "text-zinc-500"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

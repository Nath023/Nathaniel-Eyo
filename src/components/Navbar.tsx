import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "../data/profile";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Writing", path: "/writing" },
  { name: "Lab", path: "/lab" },
  { name: "Now", path: "/now" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl print:hidden">
      <div className="bg-surface/80 backdrop-blur-xl border border-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl px-5 h-14 flex items-center justify-between">
        <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="font-serif italic text-2xl tracking-tight hover:opacity-70 transition-opacity z-50 relative flex items-center h-full"
        >
          N.E.
        </NavLink>
        
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-[13px] font-mono tracking-tight transition-colors hover:text-ink relative py-4",
                  isActive ? "text-ink" : "text-muted"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="text-[13px] font-mono tracking-tight px-4 py-2 rounded-full bg-ink text-base hover:bg-accent hover:text-white transition-all ml-2"
          >
            Contact
          </NavLink>
        </nav>

        <button 
          className="md:hidden flex items-center justify-center p-2 -mr-2 z-50 relative text-ink"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-16 left-0 w-full bg-surface/95 backdrop-blur-2xl border border-border/60 shadow-2xl rounded-2xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-2">
              {[...links, { name: "Contact", path: "/contact" }].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-mono text-sm px-6 py-4 rounded-xl transition-colors",
                      isActive ? "bg-border/50 text-ink" : "text-muted hover:bg-border/30 hover:text-ink"
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

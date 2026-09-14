import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

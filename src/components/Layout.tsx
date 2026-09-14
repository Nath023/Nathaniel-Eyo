import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-base text-ink">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

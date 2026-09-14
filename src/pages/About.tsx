import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl flex flex-col gap-12"
    >
      <SEO title="About" />
      
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl md:text-5xl">My Story</h1>
        <p className="text-xl text-zinc-500 font-light leading-relaxed">
          From early curiosity in technology to building digital systems that drive business growth.
        </p>
      </header>

      <div className="prose prose-zinc prose-p:leading-relaxed max-w-none text-zinc-700">
        <div className="flex flex-col gap-16 relative">
          
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-zinc-200" />

          {/* Timeline Items */}
          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-900 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">The Foundation</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Economics at Niger Delta University</h3>
            <p>
              My academic journey began in Economics at Niger Delta University. While I spent years analyzing market systems and human behavior, I realized my true passion lay in building digital systems. This economic background gave me a unique strategic edge: understanding how digital products must drive real business value and ROI. I later transitioned to the National Open University of Nigeria (NOUN) to better align my studies with my evolving tech career.
            </p>
          </div>

          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">2019</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">The Beginning</h3>
            <p>
              I started freelancing for friends and family, building simple websites and learning the fundamentals of web development. What began as a helpful hobby quickly evolved into a passion for creating digital experiences that truly make a difference.
            </p>
          </div>

          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">2020 – 2021</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Growth & Discovery</h3>
            <p>
              I expanded my skill set deeply into WordPress development and began understanding client needs beyond just coding. Crucially, I discovered the power of SEO, realizing how technical skills could drive tangible, measurable business results for clients.
            </p>
          </div>

          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">2022</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Founding ALDS</h3>
            <p>
              I founded Alpha-Link Digital Solutions (ALDS) to bring together my technical skills with strategic thinking. The goal was simple: help businesses not just get online, but thrive online by providing comprehensive solutions that combine web development with digital strategy.
            </p>
          </div>

          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">2024 – 2025</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Refinement & Expansion</h3>
            <p>
              I completed the prestigious ALX Software Engineering Foundation program, mastering modern development practices, collaborative workflows, and industry best practices.
            </p>
          </div>
          
          <div className="relative md:pl-16">
            <div className="hidden md:block absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-zinc-50" />
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-400 block mb-2">Today</span>
            <h3 className="font-serif text-2xl font-semibold text-zinc-900 mb-4">Current Focus & Future Direction</h3>
            <p>
              {profile.biography.short}
            </p>
            <div className="mt-8">
              <Link to="/now" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-100 transition-colors">
                See what I'm doing now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const firstName = personal.name.split(' ')[0];
  const lastName = personal.name.split(' ').slice(1).join(' ');

  return (
    <section id="hero" className="w-full bg-background border-b border-black/10 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] border-b border-black/10 relative z-10">
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-8 border-r border-black/10 p-8 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            {/* Eyebrow Kicker & Status Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface border border-black/10 text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Architecture & AI
              </span>
              <span className="text-xs font-mono tracking-widest text-muted uppercase hidden sm:inline-block">
                SYSTEMS • AI PIPELINES • CLOUD
              </span>
            </div>

            {/* Kinetic Hero Headline */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] md:text-[6.5rem] lg:text-[7.2rem] font-black leading-[0.85] tracking-tighter uppercase text-primary"
            >
              {firstName} <br />
              <span className="text-accent inline-block relative">
                {lastName}
                <span className="absolute -bottom-2 left-0 w-16 h-1.5 bg-accent rounded-full hidden md:block" />
              </span> <br />
              <span className="text-secondary/90 font-serif italic font-normal tracking-tight text-[11vw] md:text-[5.5rem] lg:text-[6rem]">
                Architect.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle & Dual Pill Action Pairings */}
          <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="max-w-xl text-lg md:text-xl font-medium leading-relaxed text-secondary">
              {personal.tagline}
            </p>

            {/* Dual Actions: Primary Pill + Secondary Glass Circle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#projects"
                className="accent-pill px-6 py-3.5 text-sm font-semibold tracking-wide inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>Explore Works</span>
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="glass-pill px-5 py-3.5 text-sm font-semibold text-primary rounded-full inline-flex items-center gap-2 hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="View Resume"
              >
                <span>Resume</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Portrait & Layered Depth */}
        <div className="lg:col-span-4 relative group min-h-[420px] lg:min-h-full bg-surface overflow-hidden flex flex-col justify-between p-8">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg?v=20261102b`}
            alt="Portrait"
            className="w-full h-full object-cover absolute inset-0 filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          {/* Top Floating Glass Badge */}
          <div className="relative z-20 self-start glass-pill px-3.5 py-1.5 text-xs font-mono rounded-full text-primary shadow-sm">
            Fig. 01 — {personal.title.split('&')[0]}
          </div>

          {/* Bottom Overlay Information */}
          <div className="relative z-20 text-white max-w-xs">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-1 flex items-center gap-1.5">
              <Terminal size={13} />
              <span>Core Stack</span>
            </p>
            <p className="text-sm font-medium text-white/90 leading-snug">
              React 19, TypeScript, FastAPI, PostgreSQL, Cloud Run
            </p>
          </div>
        </div>
      </div>

      {/* 3 Architectural Ticker Cards (Shruti 60-30-10 Blueprint) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10 bg-white">
        {/* Card 01 */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between hover:bg-surface/60 transition-colors duration-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-3 font-semibold">
              01 / Distributed Systems
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-primary mb-3">
              Resilient Cloud & Concurrency
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Durable asynchronous pipelines, containerized Cloud Run microservices, and high-throughput background processing.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs font-mono text-muted">
            <span>UPTIME FOCUS</span>
            <span className="text-primary font-bold">99.9%</span>
          </div>
        </div>

        {/* Card 02 */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-between hover:bg-surface/60 transition-colors duration-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-3 font-semibold">
              02 / AI Pipelines & RAG
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-primary mb-3">
              Autonomous Intelligence
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Production LLM orchestration with pgvector embeddings, validation guardrails, and compliance-ready agent workflows.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs font-mono text-muted">
            <span>VECTOR SEARCH</span>
            <span className="text-primary font-bold">pgvector</span>
          </div>
        </div>

        {/* Card 03 */}
        <div className="p-8 md:p-10 flex flex-col justify-between hover:bg-surface/60 transition-colors duration-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent block mb-3 font-semibold">
              03 / High-Performance Frontend
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-primary mb-3">
              Kinetic Modern Interfaces
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Prerendered SEO/AEO architectures, micro-interactions with Framer Motion, and pixel-precise aesthetic systems.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs font-mono text-muted">
            <span>ENGINE</span>
            <span className="text-primary font-bold">React 19 + Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

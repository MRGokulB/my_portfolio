import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const firstName = personal.name.split(' ')[0];
  const lastName = personal.name.split(' ').slice(1).join(' ');

  return (
    <section id="hero" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[75vh] border-b border-black bg-white">
        <div className="md:col-span-7 lg:col-span-8 border-r border-black p-8 md:p-14 flex flex-col justify-between">
          <div>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-[5rem] font-serif font-bold leading-[1.05] tracking-tight text-primary"
            >
              {firstName} <br />
              <span className="text-accent">{lastName}</span> <br />
              <span className="text-secondary font-medium text-3xl sm:text-4xl lg:text-5xl normal-case block mt-2">
                Systems Architect
              </span>
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
            <p className="max-w-md text-lg font-medium leading-relaxed text-secondary">
              {personal.tagline}
            </p>
            <div className="w-10 h-10 border border-black/20 rounded-full shrink-0 flex items-center justify-center transition-transform hover:rotate-90 motion-safe:duration-500 bg-surface/50">
              <div className="w-2.5 h-2.5 bg-accent rounded-full" />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-4 p-8 flex items-center justify-center bg-surface/40 relative">
          <div className="w-full max-w-xs aspect-[4/5] rounded-xl overflow-hidden border border-black/15 shadow-md bg-white relative group">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt={personal.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 p-3.5 bg-white/95 backdrop-blur-sm border-t border-black/10 flex items-center justify-between text-xs">
              <span className="font-semibold text-primary">{personal.name}</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <div className="md:col-span-1 border-r border-black p-8 md:p-12 flex items-center justify-center bg-accent text-white group overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight text-center">
            Systems Architecture
          </h2>
        </div>
        <div className="md:col-span-2 aspect-square md:aspect-auto relative group overflow-hidden bg-primary text-white p-8 md:p-12 flex flex-col justify-end">
          <div className="relative z-10 max-w-lg">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-tight">
              Architecture of Information
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {personal.bio}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
        <div className="md:col-span-2 border-r border-black p-8 h-80 flex flex-col justify-between hover:bg-surface/50 transition-colors duration-300">
          <span className="text-xs text-secondary mb-4 block font-mono uppercase tracking-wider font-medium">
            01 / Concept
          </span>
          <p className="text-2xl sm:text-3xl font-serif font-bold leading-snug tracking-tight text-primary">
            We strip away the non-essential to reveal the core truth of the platform.
          </p>
        </div>
        <div className="md:col-span-1 border-r border-black p-8 h-80 bg-surface text-primary flex flex-col justify-between">
          <span className="text-xs text-secondary mb-4 block font-mono uppercase tracking-wider font-medium">
            02 / Execution
          </span>
          <div className="h-full flex items-center justify-center">
            <div className="w-16 h-16 border border-black/20 rounded-full flex items-center justify-center bg-white shadow-sm">
              <div className="w-4 h-4 bg-accent rounded-full" />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 p-8 h-80 flex flex-col justify-between bg-white hover:bg-surface/50 transition-colors duration-300">
          <span className="text-xs text-secondary mb-4 block font-mono uppercase tracking-wider font-medium">
            03 / Delivery
          </span>
          <ul className="space-y-3.5 text-sm font-medium">
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Architecture</span> <span className="font-mono text-xs text-accent">Core</span></li>
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Frontend</span> <span className="font-mono text-xs text-accent">Modern</span></li>
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Backend</span> <span className="font-mono text-xs text-accent">Scalable</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

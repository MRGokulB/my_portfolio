import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="w-full">
      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh] border-b border-black bg-white">
        {/* Left: Typography */}
        <div className="md:col-span-8 border-r border-black p-8 md:p-12 flex flex-col justify-between">
          <div>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase"
            >
              {personal.name.split(' ')[0]} <br />
              <span className="text-white bg-accent px-4 ml-0 md:ml-12">{personal.name.split(' ')[1].substring(0, 5)}</span> <br />
              Architect
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
            <p className="max-w-md text-xl font-medium leading-tight">
              {personal.tagline}
            </p>
            <div className="w-16 h-16 bg-black rounded-full animate-bounce shrink-0 mt-8 md:mt-0"></div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:col-span-4 h-full relative group min-h-[50vh]">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Portrait"
            className="w-full h-full object-cover absolute inset-0 filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute top-4 left-4 bg-white px-2 py-1 font-mono text-xs border border-black uppercase z-10">
            Fig. 01 — {personal.title}
          </div>
        </div>
      </div>

      {/* Asymmetrical Grid Section (Replicating the reference UI's lower content) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <div className="md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group overflow-hidden">
          <h2 className="text-6xl font-black -rotate-90 group-hover:rotate-0 transition-transform duration-500 uppercase">
            System
          </h2>
        </div>
        <div className="md:col-span-2 aspect-square md:aspect-auto relative group overflow-hidden bg-black">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
            alt="Architecture"
            className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="relative z-10 p-8 md:p-12 pointer-events-none mix-blend-difference text-white h-full flex flex-col justify-end">
            <h3 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Architecture of Information</h3>
            <p className="max-w-md font-mono text-sm leading-relaxed">{personal.bio}</p>
          </div>
        </div>
      </div>

      {/* Delivery/Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
        <div className="md:col-span-2 border-r border-black p-8 h-96 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500">
          <span className="font-mono text-xs uppercase mb-4 block">01 / Concept</span>
          <p className="text-3xl font-bold leading-tight tracking-tight">
            We strip away the non-essential to reveal the core truth of the platform.
          </p>
        </div>
        <div className="md:col-span-1 border-r border-black p-8 h-96 bg-secondary text-white flex flex-col justify-between">
          <span className="font-mono text-xs uppercase mb-4 block">02 / Execution</span>
          <div className="h-full flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-white rounded-full"></div>
          </div>
        </div>
        <div className="md:col-span-1 p-8 h-96 flex flex-col justify-between bg-white hover:bg-accent hover:text-white transition-colors duration-300">
          <span className="font-mono text-xs uppercase mb-4 block">03 / Delivery</span>
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex justify-between border-b border-current pb-2"><span>Architecture</span> <span>●</span></li>
            <li className="flex justify-between border-b border-current pb-2"><span>Frontend</span> <span>●</span></li>
            <li className="flex justify-between border-b border-current pb-2"><span>Backend</span> <span>●</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
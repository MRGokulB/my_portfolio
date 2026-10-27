import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const firstName = personal.name.split(' ')[0];
  const lastName = personal.name.split(' ').slice(1).join(' ');

  return (
    <section id="hero" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh] border-b border-black bg-white">
        <div className="md:col-span-8 border-r border-black p-8 md:p-12 flex flex-col justify-between">
          <div>
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-[12vw] md:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase"
            >
              {firstName} <br />
              <span className="text-white bg-accent px-4 ml-0 md:ml-4 inline-block">{lastName}</span> <br />
              Architect
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
            <p className="max-w-md text-xl font-medium leading-tight text-secondary">
              {personal.tagline}
            </p>
            <div className="w-12 h-12 border-2 border-black rounded-full shrink-0 flex items-center justify-center transition-transform hover:rotate-90 motion-safe:duration-500">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
          </div>
        </div>

        <div className="md:col-span-4 h-full relative group min-h-[50vh]">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Portrait"
            className="w-full h-full object-cover absolute inset-0 filter grayscale group-hover:grayscale-0 transition-[filter] duration-500"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs border border-black z-10">
            Fig. 01: {personal.title}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <div className="md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group overflow-hidden">
          <h2 className="text-5xl font-black -rotate-90 group-hover:rotate-0 transition-transform duration-500 uppercase">
            Systems
          </h2>
        </div>
        <div className="md:col-span-2 aspect-square md:aspect-auto relative group overflow-hidden bg-black text-white p-8 md:p-12 flex flex-col justify-end">
          <div className="relative z-10 max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
              Architecture of Information
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {personal.bio}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-black">
        <div className="md:col-span-2 border-r border-black p-8 h-96 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-500">
          <span className="text-xs text-secondary mb-4 block font-medium group-hover:text-white/80">
            01 / Concept
          </span>
          <p className="text-3xl font-bold leading-tight tracking-tight">
            We strip away the non-essential to reveal the core truth of the platform.
          </p>
        </div>
        <div className="md:col-span-1 border-r border-black p-8 h-96 bg-secondary text-white flex flex-col justify-between">
          <span className="text-xs text-white/80 mb-4 block font-medium">
            02 / Execution
          </span>
          <div className="h-full flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 p-8 h-96 flex flex-col justify-between bg-white hover:bg-accent hover:text-white transition-colors duration-300">
          <span className="text-xs text-secondary mb-4 block font-medium">
            03 / Delivery
          </span>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex justify-between border-b border-current pb-2"><span>Architecture</span> <span>Core</span></li>
            <li className="flex justify-between border-b border-current pb-2"><span>Frontend</span> <span>Modern</span></li>
            <li className="flex justify-between border-b border-current pb-2"><span>Backend</span> <span>Scalable</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="w-full">
      {/* Hero Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[85vh] border-b border-black">

        {/* Left: Typography */}
        <div className="md:col-span-8 border-r border-black p-8 md:p-12 flex flex-col justify-between pt-32">
          <div>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[12vw] md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase text-black"
            >
              {personal.name.split(' ')[0]} <br />
              <span className="text-white bg-accent px-4 ml-0 md:ml-12">{personal.name.split(' ')[1]}</span> <br />
              Architect
            </motion.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8 md:gap-0">
            <div className="max-w-md">
              <span className="label-category !mb-2">Introduction</span>
              <p className="text-xl font-medium leading-tight text-secondary">
                {personal.bio}
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href={personal.resume}
                  download="Gangaprasad_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 font-mono text-sm uppercase tracking-wider"
                >
                  <Download strokeWidth={1.5} size={16} /> Resume
                </a>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-black text-white hover:bg-accent transition-colors duration-300 font-mono text-sm uppercase tracking-wider"
                >
                  View Work
                </button>
              </div>
            </div>
            {/* Bouncing Element from Reference UI */}
            <div className="w-16 h-16 bg-black rounded-full animate-bounce hidden md:block"></div>
          </div>
        </div>

        {/* Right: Abstract Graphic / Location */}
        <div className="md:col-span-4 h-full relative group min-h-[50vh] flex flex-col">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-end border-b border-black md:border-b-0 bg-surface">
            <span className="font-mono text-xs uppercase mb-4 block tracking-widest text-muted">01 / Subject</span>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-2">
              System<br />Engineer
            </h2>
            <ul className="space-y-4 font-mono text-sm mt-8 w-full">
              <li className="flex justify-between border-b border-black pb-1">
                <span className="text-muted">Role</span>
                <span className="font-bold text-right">Full Stack<br />Developer</span>
              </li>
              <li className="flex justify-between border-b border-black pb-1 pt-2">
                <span className="text-muted">Base</span>
                <span className="font-bold">India</span>
              </li>
              <li className="flex justify-between border-black pb-1 pt-2">
                <span className="text-muted">Status</span>
                <span className="font-bold text-accent">Available</span>
              </li>
            </ul>
          </div>

          {/* Dark block replacing portrait */}
          <div className="h-1/3 min-h-[250px] bg-black text-white p-8 relative overflow-hidden flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[150%] aspect-square border-4 border-white/20 rounded-full border-dashed absolute mix-blend-overlay"
            />
            <div className="z-10 text-center font-serif text-3xl italic">
              Building systems<br />that communicate.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
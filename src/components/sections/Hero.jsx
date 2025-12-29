import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Code2, Cpu, Download } from 'lucide-react';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textReveal = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden pt-20">
      {/* Background Ambience - Theme Aware */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 lg:pb-0"
      >
        {/* Left: Personal Identity */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="overflow-hidden">
            <motion.div variants={textReveal} className="flex items-center gap-2 text-accent-cyan font-mono text-sm mb-4 bg-accent-cyan/10 w-fit px-3 py-1 rounded-full border border-accent-cyan/20">
              <Terminal size={14} />
              <span>Hello World</span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.h1 variants={textReveal} className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1] tracking-tighter text-gray-900 dark:text-white">
              {personal.name.split(' ')[0]}<br />
              <span className="text-gray-700 dark:text-gray-600">{personal.name.split(' ')[1]}</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h2 variants={textReveal} className="text-2xl md:text-3xl text-gray-800 dark:text-gray-300 font-light mt-2">
              {personal.title} <span className="text-gray-600 dark:text-gray-600">based in India.</span>
            </motion.h2>
          </div>

          <div className="overflow-hidden max-w-xl mt-4">
            <motion.p variants={textReveal} className="font-body text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
              {personal.bio}
            </motion.p>
          </div>

          <motion.div variants={textReveal} className="flex flex-wrap gap-4 mt-12">
            <Button
              variant="primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-8 py-4 text-lg bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-lg shadow-accent-blue/20"
              icon={<ArrowRight size={20} />}
            >
              View Selected Works
            </Button>

            <a
              href={portfolioData.personal.resume}
              download="Gangaprasad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 text-lg rounded-full border border-gray-300 dark:border-white/10 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all bg-white/50 dark:bg-white/5 backdrop-blur-md"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>

            <div className="flex gap-4 items-center px-6">
              <a href={personal.social.github} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Github size={24} /></a>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`mailto:${personal.email}`} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>

        {/* Right: Code / Tech Visuals */}
        <motion.div style={{ y: y2 }} className="lg:col-span-5 hidden lg:flex flex-col gap-6 items-end relative">
          {/* Code Snippet Card - Kept Dark for "Terminal" Feel */}
          <div className="relative z-10 p-6 rounded-2xl bg-[#1e1e1e] border border-white/10 w-full max-w-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm text-gray-300 space-y-2">
              <p><span className="text-accent-purple">const</span> <span className="text-yellow-300">developer</span> = <span className="text-accent-purple">new</span> <span className="text-blue-400">Architect</span>();</p>
              <p><span className="text-yellow-300">developer</span>.<span className="text-blue-400">stack</span>([</p>
              <p className="pl-4"><span className="text-green-300">'React.js'</span>,</p>
              <p className="pl-4"><span className="text-green-300">'Three.js'</span>,</p>
              <p className="pl-4"><span className="text-green-300">'Node.js'</span></p>
              <p>]);</p>
              <p><span className="text-gray-500">// Ready to build.</span></p>
            </div>
          </div>

          {/* Tech Stack Floating Badge - Glass Effect */}
          <div className="absolute -left-12 bottom-20 p-4 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 -rotate-6 hover:rotate-0 transition-transform duration-500 flex items-center gap-3 shadow-xl dark:shadow-none">
            <div className="p-2 bg-accent-blue/10 dark:bg-accent-blue/20 rounded-lg text-accent-blue">
              <Code2 size={24} />
            </div>
            <div>
              <div className="text-gray-900 dark:text-white font-bold">8+ Projects</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Deployed</div>
            </div>
          </div>

          <div className="absolute -right-4 top-20 p-4 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rotate-6 hover:rotate-0 transition-transform duration-500 flex items-center gap-3 shadow-xl dark:shadow-none">
            <div className="p-2 bg-accent-purple/10 dark:bg-accent-purple/20 rounded-lg text-accent-purple">
              <Cpu size={24} />
            </div>
            <div>
              <div className="text-gray-900 dark:text-white font-bold">Full Stack</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Specialist</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-6 lg:left-20 flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest z-20"
      >
        <div className="w-12 h-[1px] bg-gray-400 dark:bg-gray-700" />
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;
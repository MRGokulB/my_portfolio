import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="projects" className="relative md:h-[300vh] h-auto py-20 md:py-0">
      {/* Mobile View: Vertical Stack */}
      <div className="md:hidden container-custom px-6 flex flex-col gap-12">
        <div className="mb-8">
          <span className="text-accent-blue font-mono uppercase tracking-widest text-sm mb-4 block">02. Selected Works</span>
          <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built<br />
            <span className="text-gray-500 dark:text-gray-700">From Scratch.</span>
          </h2>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="relative w-full aspect-[4/5] bg-gray-100 dark:bg-[#0a0a0f] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full z-10 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
              <div className="flex gap-3 mt-4">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-colors">
                  <Github size={20} />
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white text-black hover:bg-accent-blue hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-16">
          {/* Header Card */}
          <div className="flex-shrink-0 w-[400px] h-[60vh] flex flex-col justify-center glass-effect p-12 rounded-3xl">
            <span className="label-category">02. Selected Works</span>
            <h2 className="heading-display">
              Built<br />
              <span className="text-gray-500 dark:text-gray-700">From Scratch.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-sm">
              A showcase of technical depth. From database architecture to pixel-perfect interactions.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Code2 className="text-gray-400 dark:text-gray-600" />
              <div className="h-[1px] w-24 bg-gray-300 dark:bg-gray-800"></div>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div key={project.id} className="group relative flex-shrink-0 w-[60vw] h-[70vh] bg-gray-100 dark:bg-[#0a0a0f] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-accent-blue/50 dark:hover:border-white/20 transition-all duration-500 shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 dark:opacity-50 group-hover:opacity-60 dark:group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0a0a0f] dark:via-[#0a0a0f]/80 dark:to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-10">
                <div className="flex justify-between items-end mb-8">
                  <div className="max-w-3xl">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs font-mono font-medium tracking-wide text-gray-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-400 dark:border-white/20 shadow-sm">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs font-mono font-medium tracking-wide text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-800 dark:text-gray-300 text-lg font-light leading-relaxed line-clamp-2 md:line-clamp-none max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white hover:text-black transition-all">
                      <Github size={24} />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white text-black hover:bg-accent-blue hover:text-white transition-all shadow-lg">
                        <ArrowUpRight size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
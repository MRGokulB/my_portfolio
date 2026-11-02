import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

const SwissGridItem = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`p-8 md:p-12 relative group overflow-hidden bg-white hover:bg-black hover:text-white transition-colors duration-500 border border-black ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="w-full bg-white border-b border-black">
      <div className="p-8 md:p-16 lg:p-24 bg-white border-b border-black">
        <h2 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase mb-6 text-black">
          Selected <br />
          <span className="text-accent">Works</span>
        </h2>
        <p className="text-xl font-medium max-w-2xl text-secondary">
          A showcase of technical depth, spanning distributed systems, relational databases, and high-performance user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-b border-black">
        {projects.filter(p => p.featured).slice(0, 4).map((project, index) => {
          const isLarge = index === 0 || index === 3;
          const colSpanClass = isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1";

          return (
            <SwissGridItem
              key={project.id}
              delay={index * 0.1}
              className={`${colSpanClass} flex flex-col justify-between !border-t-0 !border-l-0 !border-b-0`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs border border-current px-2.5 py-1">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Visit live application"
                          className="inline-flex items-center gap-1 text-xs font-mono border border-current px-2.5 py-1 hover:bg-accent hover:border-accent hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight strokeWidth={1.5} size={14} />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View source on GitHub"
                        className="p-1 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                      >
                        <Github strokeWidth={1.5} size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6 w-full rounded border border-black/20 group-hover:border-white/30 overflow-hidden bg-neutral-100 transition-all duration-500">
                    <div className="h-6 px-3 bg-neutral-200/80 group-hover:bg-neutral-800 flex items-center gap-1.5 border-b border-black/10 group-hover:border-white/20 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="ml-2 font-mono text-[10px] text-neutral-500 group-hover:text-neutral-400 truncate">
                        {project.liveUrl || 'production // architecture'}
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-serif text-2xl md:text-4xl font-bold mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mb-5 max-w-xl text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-mono border border-current px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwissGridItem>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <Link
          to="/works"
          className="block md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group cursor-pointer hover:bg-black transition-colors duration-500 overflow-hidden focus-visible:outline-2 focus-visible:outline-accent"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-black md:-rotate-90 group-hover:rotate-0 motion-safe:transition-transform motion-reduce:transition-none duration-500 uppercase">
            All Works
          </h2>
        </Link>
        <div className="md:col-span-2 p-8 md:p-16 flex flex-col justify-center items-center text-center bg-white relative overflow-hidden group hover:bg-black hover:text-white transition-colors duration-500">
          <h3 className="text-2xl md:text-4xl font-serif max-w-2xl italic mb-12 leading-tight relative z-10">
            “We strip away the non-essential to reveal the core truth of the platform.”
          </h3>
          <Link
            to="/works"
            className="text-xs font-medium border border-current px-8 py-3.5 hover:bg-white hover:text-black transition-colors duration-300 relative z-10 focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
          >
            Explore directory
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
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
    className={`p-8 md:p-12 relative group overflow-hidden bg-white hover:bg-surface/50 transition-colors duration-300 border border-black ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="w-full bg-white border-b border-black">
      <div className="p-8 md:p-14 lg:p-20 bg-white border-b border-black">
        <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight uppercase mb-4 text-primary">
          Selected <br />
          <span className="text-accent">Works</span>
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-2xl text-secondary">
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
              className={`${colSpanClass} flex flex-col justify-between min-h-[480px] md:min-h-[560px] !border-t-0 !border-l-0 !border-b-0`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs border border-black/15 bg-surface text-secondary px-2.5 py-1 rounded-md">
                    0{index + 1}
                  </span>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View source on GitHub"
                      className="text-secondary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                    >
                      <Github strokeWidth={1.5} size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit live application"
                        className="text-secondary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                      >
                        <ArrowUpRight strokeWidth={1.5} size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-serif text-2xl md:text-4xl font-bold mb-3 tracking-tight text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-xl text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-mono border border-black/15 bg-surface text-secondary px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"
              />
            </SwissGridItem>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <Link
          to="/works"
          className="block md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group cursor-pointer hover:opacity-95 transition-opacity duration-300 overflow-hidden focus-visible:outline-2 focus-visible:outline-accent"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-center">
            All Works
          </h2>
        </Link>
        <div className="md:col-span-2 p-8 md:p-16 flex flex-col justify-center items-center text-center bg-white relative overflow-hidden group">
          <h3 className="text-2xl md:text-3xl font-serif max-w-2xl italic mb-10 leading-snug text-primary">
            “We strip away the non-essential to reveal the core truth of the platform.”
          </h3>
          <Link
            to="/works"
            className="text-xs font-medium border border-black/20 bg-surface hover:bg-primary hover:text-white transition-colors duration-300 px-8 py-3.5 rounded-md relative z-10 focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
          >
            Explore directory
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

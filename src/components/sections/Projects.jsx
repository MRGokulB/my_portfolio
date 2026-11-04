import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import { ArrowRight, ArrowUpRight, Github, Layers } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section id="projects" className="w-full bg-background border-b border-black/10">
      {/* Section Header: Shruti Eyebrow + Multi-Style Display */}
      <div className="p-8 md:p-14 lg:p-16 border-b border-black/10 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-0.5 bg-accent" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            Featured Systems & Production Code
          </span>
        </div>
        <h2 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase mb-6 text-primary">
          Selected <span className="text-accent italic font-normal">Works.</span>
        </h2>
        <p className="text-lg md:text-xl font-medium max-w-2xl text-secondary leading-relaxed">
          Technical architectures spanning distributed cloud infrastructure, autonomous agent pipelines, and high-concurrency microservices.
        </p>
      </div>

      {/* Projects Grid with Shruti Card Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-black/10">
        {featuredProjects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 relative group overflow-hidden bg-white hover:bg-surface/60 transition-all duration-500 border-b md:border-b-0 ${
                index % 2 === 0 ? 'md:border-r border-black/10' : ''
              } ${index < 2 ? 'md:border-b border-black/10' : ''} flex flex-col justify-between min-h-[520px]`}
            >
              {/* Card Top: Index Badge & Live Links */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-black/10 text-secondary">
                  0{index + 1}
                </span>

                <div className="flex gap-2.5 items-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View source on GitHub"
                      className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center text-primary hover:bg-black hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95 shadow-sm"
                    >
                      <Github size={17} strokeWidth={2} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit live application"
                      className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95 shadow-accent"
                    >
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body: Title, Description, Tags */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-serif text-2xl md:text-4xl font-bold mb-3 leading-tight text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-xl text-secondary text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Pill Tag Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-surface/80 border border-black/5 text-secondary group-hover:border-black/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Background Visual Texture */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-15 filter grayscale contrast-125 transition-all duration-700 motion-safe:group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-white/40 transition-colors duration-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Banner & Directory Link */}
      <div className="p-10 md:p-14 bg-surface flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
            Want to see the entire technical ledger?
          </h3>
          <p className="text-sm text-secondary">
            Explore 15+ distributed architectures, AI agents, and enterprise deployments.
          </p>
        </div>

        <Link
          to="/works"
          className="accent-pill px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent active:scale-95 shrink-0"
        >
          <span>All Works Directory</span>
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;

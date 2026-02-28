import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

const SwissGridItem = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`border-b border-black p-8 relative group overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="w-full bg-white border-b border-black">
      {/* Header Area */}
      <div className="p-8 md:p-12 border-b border-black bg-surface">
        <span className="label-category !mb-4">02. Selected Works</span>
        <h2 className="heading-display !mb-0 text-4xl md:text-7xl">
          Built From <br />
          <span className="text-white bg-accent px-4 ml-0 md:ml-12">Scratch</span>
        </h2>
        <p className="mt-8 text-xl font-medium max-w-2xl text-secondary">
          A showcase of technical depth. From database architecture to pixel-perfect interactions.
        </p>
      </div>

      {/* Asymmetrical Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          // Create an asymmetrical layout based on index index
          const isLarge = index === 0 || index === 3;
          const colSpanClass = isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1";

          return (
            <SwissGridItem
              key={project.id}
              delay={index * 0.1}
              className={`${colSpanClass} md:border-r border-black flex flex-col justify-between min-h-[500px] hover:bg-black hover:text-white transition-colors duration-500`}
            >
              <div className="relative z-10 flex flex-col h-full z-20">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest border border-current px-2 py-1">
                    Proj. 0{index + 1}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      <Github strokeWidth={1.5} size={20} />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                        <ArrowUpRight strokeWidth={1.5} size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary group-hover:text-gray-400 mb-6 max-w-xl transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-medium border border-current px-2 py-1 uppercase group-hover:border-white/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Image Background */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 mix-blend-luminosity filter grayscale transition-opacity duration-500 z-0"
              />
            </SwissGridItem>
          );
        })}
      </div>

      {/* Divider / Interstitial */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <SwissGridItem className="md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group cursor-default">
          <h2 className="text-6xl font-black -rotate-90 group-hover:rotate-0 transition-transform duration-500">
            Code
          </h2>
        </SwissGridItem>
        <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-serif max-w-lg italic">
            "We strip away the non-essential to reveal the core truth of the platform."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
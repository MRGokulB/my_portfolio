import { motion } from 'framer-motion';
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
      {/* Header Area */}
      <div className="p-8 md:p-16 lg:p-24 bg-white border-b border-black">
        <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-6 block font-bold">02. Selected Works</span>
        <h2 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase mb-8 text-black">
          Built From <br />
          <span className="text-accent">Scratch</span>
        </h2>
        <p className="text-xl font-medium max-w-2xl text-secondary">
          A showcase of technical depth. From database architecture to pixel-perfect interactions.
        </p>
      </div>

      {/* Asymmetrical Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-b border-black">
        {projects.filter(p => p.featured).slice(0, 4).map((project, index) => {
          // Create an asymmetrical layout based on index
          const isLarge = index === 0 || index === 3;
          const colSpanClass = isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1";

          return (
            <SwissGridItem
              key={project.id}
              delay={index * 0.1}
              className={`${colSpanClass} flex flex-col justify-between min-h-[500px] md:min-h-[600px] !border-t-0 !border-l-0 !border-b-0`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest border border-black group-hover:border-white px-2 py-1 transition-colors">
                    Proj. 0{index + 1}
                  </span>
                  <div className="flex gap-4">
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
                  <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-xl group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-medium border border-black px-2 py-1 uppercase group-hover:border-white group-hover:text-white transition-colors">
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
        <a href="/works" className="block md:col-span-1 border-r border-black aspect-square flex items-center justify-center bg-accent text-white group cursor-pointer hover:bg-black transition-colors duration-500 overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-serif font-black md:-rotate-90 group-hover:rotate-0 transition-transform duration-500 uppercase">
            All Works
          </h2>
        </a>
        <div className="md:col-span-2 p-8 md:p-16 flex flex-col justify-center items-center text-center bg-white relative overflow-hidden group hover:bg-black hover:text-white transition-colors duration-500">
          <h3 className="text-2xl md:text-4xl font-serif max-w-2xl italic mb-12 leading-tight relative z-10">
            "We strip away the non-essential to reveal the core truth of the platform."
          </h3>
          <a href="/works" className="font-mono text-sm uppercase tracking-widest border border-black px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 relative z-10 group-hover:border-white">
            Explore Directory
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
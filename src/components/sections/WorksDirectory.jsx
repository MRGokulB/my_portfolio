import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

const WorksDirectory = () => {
    const { projects } = portfolioData;
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    const allCategories = ['All', 'Full Stack', 'Frontend', 'AI / ML', 'Mobile'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => {
            if (activeFilter === 'Full Stack') {
                return project.tags.some(t => ['Node.js', 'Express.js', 'Firebase', 'Next.js', 'PostgreSQL'].includes(t));
            }
            if (activeFilter === 'Frontend') {
                return project.tags.some(t => ['React.js', 'Tailwind CSS', 'Redux'].includes(t));
            }
            if (activeFilter === 'AI / ML') {
                return project.tags.some(t => ['OpenAI TTS', 'DALL·E API', 'FastAPI', 'Gemini API', 'LLM'].includes(t)) || project.title.includes('AI') || project.title.includes('IntraIntel') || project.title.includes('Enclavia');
            }
            if (activeFilter === 'Mobile') {
                return project.tags.some(t => ['React Native', 'Expo'].includes(t));
            }
            return true;
        });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="min-h-dvh bg-white pt-24 md:pt-32 pb-24 relative overflow-hidden">
            <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 max-w-screen-2xl mx-auto">
                <div>
                    <h1 className="font-serif font-black text-5xl md:text-8xl tracking-tighter uppercase text-black">
                        All Works
                    </h1>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-md justify-start md:justify-end">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveFilter(category)}
                            className={`text-xs font-medium px-4 py-2 border border-black transition-colors duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-accent ${activeFilter === category
                                ? 'bg-black text-white'
                                : 'bg-white hover:bg-black hover:text-white text-black'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 relative">
                <div className="w-full border-t border-black">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:px-12 border-b border-black transition-colors transition-opacity duration-300 hover:bg-black hover:text-white cursor-pointer ${hoveredProject && hoveredProject !== project.id ? 'opacity-40' : 'opacity-100'
                                }`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2 mb-4 md:mb-0">
                                <span className="font-mono text-xs opacity-50 block w-8 font-bold">
                                    {(projects.findIndex(p => p.id === project.id) + 1).toString().padStart(2, '0')}
                                </span>
                                <h3 className="font-serif text-3xl md:text-5xl font-bold group-hover:pl-4 motion-safe:transition-[padding] motion-reduce:transition-none duration-300">
                                    {project.title.split('(')[0].trim()}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 w-full md:w-1/3 mb-6 md:mb-0">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-xs font-mono border border-current bg-white text-black px-3 py-1 block transition-colors group-hover:border-white group-hover:text-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-start md:justify-end gap-6 w-full md:w-auto relative z-20">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View source code"
                                    className="flex items-center gap-2 hover:opacity-70 transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                                    onClick={(e) => { e.stopPropagation(); }}
                                >
                                    <span className="text-xs font-medium hidden md:inline">Code</span>
                                    <Github strokeWidth={1.5} size={20} />
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="View live deployment"
                                        className="flex items-center gap-2 hover:opacity-70 transition-colors focus-visible:outline-2 focus-visible:outline-accent active:scale-95"
                                        onClick={(e) => { e.stopPropagation(); }}
                                    >
                                        <span className="text-xs font-medium hidden md:inline">Live</span>
                                        <ArrowUpRight strokeWidth={1.5} size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <div className="p-12 text-center text-sm font-medium text-secondary">
                            No projects found for this category.
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {hoveredProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            x: smoothX,
                            y: smoothY,
                            translateX: '50px',
                            translateY: '-150px',
                            pointerEvents: 'none',
                            zIndex: 50,
                        }}
                        className="hidden md:block w-80 h-48 border-2 border-black overflow-hidden bg-black"
                    >
                        <img
                            src={projects.find(p => p.id === hoveredProject)?.image}
                            alt="Project Preview"
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WorksDirectory;

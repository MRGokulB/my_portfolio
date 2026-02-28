import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

const WorksDirectory = () => {
    const { projects } = portfolioData;
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);

    // Extract unique categories (using the first tag of each project as primary category, or predefined)
    const allCategories = ['All', 'React.js', 'Full Stack', 'Frontend', 'Enterprise', 'AI'];

    // Create an explicit mapping for tags to our main categories for filtering
    const mapCategory = (project) => {
        const tagsStr = project.tags.join(' ').toLowerCase();
        if (tagsStr.includes('full stack') || (tagsStr.includes('node.js') && tagsStr.includes('react'))) return 'Full Stack';
        if (tagsStr.includes('ai') || tagsStr.includes('openai')) return 'AI';
        if (tagsStr.includes('enterprise')) return 'Enterprise';
        if (tagsStr.includes('react')) return 'React.js';
        return 'Frontend';
    };

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => mapCategory(p) === activeFilter || p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()));

    // Setup cursor floating image with Framer Motion values for 60fps performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the cursor follow
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
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
        <section className="min-h-screen bg-surface border-b border-black pt-24 md:pt-32 pb-24 relative">
            <div className="px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                <div>
                    <span className="label-category !mb-4 inline-block">Directory</span>
                    <h1 className="heading-display !mb-0 text-5xl md:text-8xl">
                        All Works
                    </h1>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 md:max-w-md justify-start md:justify-end">
                    {allCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`font-mono text-xs xl:text-sm uppercase tracking-widest border border-current px-4 py-2 transition-colors duration-300 ${activeFilter === category
                                    ? 'bg-black text-white'
                                    : 'hover:bg-black/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Directory List */}
            <div className="w-full border-t border-black relative">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:px-12 border-b border-black transition-all duration-500 hover:bg-black hover:text-white cursor-pointer ${hoveredProject && hoveredProject !== project.id ? 'opacity-30' : 'opacity-100'
                            }`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {/* Left: Index & Title */}
                        <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2 mb-4 md:mb-0">
                            <span className="font-mono text-xs opacity-50 block w-8">
                                {(projects.findIndex(p => p.id === project.id) + 1).toString().padStart(2, '0')}
                            </span>
                            <h3 className="font-serif text-3xl md:text-5xl font-bold group-hover:pl-4 transition-all duration-500">
                                {project.title.split('(')[0].trim()}
                            </h3>
                        </div>

                        {/* Middle: Tags */}
                        <div className="flex flex-wrap gap-3 w-full md:w-1/3 mb-6 md:mb-0">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] sm:text-xs font-mono uppercase tracking-wider border border-current px-3 py-1 block rounded-full opacity-70 group-hover:border-white/40">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Right: Links */}
                        <div className="flex justify-start md:justify-end gap-6 w-full md:w-auto relative z-20">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:opacity-50 transition-opacity"
                                onClick={(e) => { e.stopPropagation(); }}
                            >
                                <span className="font-mono text-xs uppercase hidden md:inline">Code</span>
                                <Github strokeWidth={1.5} size={20} />
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:opacity-50 transition-opacity"
                                    onClick={(e) => { e.stopPropagation(); }}
                                >
                                    <span className="font-mono text-xs uppercase hidden md:inline">Live</span>
                                    <ArrowUpRight strokeWidth={1.5} size={20} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
                {filteredProjects.length === 0 && (
                    <div className="p-12 text-center font-mono text-sm uppercase">
                        No projects found for this category.
                    </div>
                )}
            </div>

            {/* Floating Image Reveal (Desktop Only) */}
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
                            translateX: '50px', // Offset from cursor to not block visibility
                            translateY: '-150px',
                            pointerEvents: 'none',
                            zIndex: 50,
                        }}
                        className="hidden md:block w-[350px] lg:w-[450px] aspect-[4/3] overflow-hidden shadow-2xl"
                    >
                        <img
                            src={projects.find(p => p.id === hoveredProject)?.image}
                            alt="Project Preview"
                            className="w-full h-full object-cover filter grayscale"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WorksDirectory;

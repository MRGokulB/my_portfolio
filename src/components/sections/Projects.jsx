import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { portfolioData } from '../../data/portfolio';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useScrollAnimation(0.2);
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Card className="h-full overflow-hidden group">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg mb-4 h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {project.featured && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-accent-blue to-accent-purple px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                <Star size={14} fill="currentColor" />
                Featured
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60" />
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-dark-300 text-accent-blue text-xs rounded-full border border-accent-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                icon={<ExternalLink size={16} />}
                className="flex-1"
              >
                Live Demo
              </Button>
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                icon={<Github size={16} />}
                className="flex-1"
              >
                Code
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'featured'].map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? 'primary' : 'secondary'}
              onClick={() => setFilter(filterOption)}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Want to see more projects?
          </p>
          <Button
            variant="outline"
            href={portfolioData.personal.social.github}
            target="_blank"
            icon={<Github size={20} />}
          >
            View All on GitHub
          </Button>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Projects;
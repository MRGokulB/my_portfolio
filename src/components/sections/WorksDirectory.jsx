import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from '../ProjectCard';
import { projectGroups } from '../../data/projectGroups';

const categories = ['All work', 'AI systems', 'Full stack', 'Interactive web'];

export default function WorksDirectory() {
  const [filter, setFilter] = useState('All work');
  const reducedMotion = useReducedMotion();
  const projects = portfolioData.projects.filter(
    (project) => filter === 'All work' || projectGroups[project.id] === filter
  );
  return (
    <section className="directory section container">
      <div className="page-heading">
        <p className="eyebrow">The project collection</p>
        <h1>
          A few ideas.
          <br />A lot of building.
        </h1>
        <p>
          From intelligent platforms to everyday experiences. A selection of things I’ve helped
          bring to life.
        </p>
      </div>
      <div className="filter-toolbar">
        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={filter === category ? 'filter-active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="project-count" role="status">
          {projects.length} projects
        </p>
      </div>
      <h2 className="sr-only">Projects</h2>
      <motion.div
        key={filter}
        className="project-grid"
        initial={{ opacity: reducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

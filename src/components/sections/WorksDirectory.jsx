import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from '../ProjectCard';
import { projectGroups } from '../../data/projectGroups';
import PageHeading from '../PageHeading';
import { Grid2X2, List } from 'lucide-react';

const categories = ['All work', 'AI systems', 'Full stack', 'Interactive web'];

export default function WorksDirectory() {
  const [filter, setFilter] = useState('All work');
  const [view, setView] = useState('grid');
  const reducedMotion = useReducedMotion();
  const projects = portfolioData.projects.filter(
    (project) => filter === 'All work' || projectGroups[project.id] === filter
  );
  return (
    <section className="directory section container">
      <PageHeading
        title="Things I’ve"
        accent="made work."
        aside={`${portfolioData.projects.length} projects across web, AI & cloud`}
      >
        Enterprise AI, learning tools, and everyday services. Different problems, built from the
        interface down to the infrastructure.
      </PageHeading>
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
        <div className="directory-tools">
          <p className="project-count" role="status">
            {projects.length} projects
          </p>
          <div className="view-switch" aria-label="Project layout">
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={view === 'grid'}
              onClick={() => setView('grid')}
            >
              <Grid2X2 size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={view === 'list'}
              onClick={() => setView('list')}
            >
              <List size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <h2 className="sr-only">Projects</h2>
      <motion.div
        key={filter}
        className={`project-grid ${view === 'list' ? 'project-list' : ''}`}
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

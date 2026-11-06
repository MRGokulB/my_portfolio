import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const projects = portfolioData.projects.filter((project) => project.featured).slice(0, 3);
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Ideas made real.</h2>
        </div>
        <Link to="/works" className="text-link">
          All projects{' '}
          <span className="count-badge">
            {portfolioData.projects.length.toString().padStart(2, '0')}
          </span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}

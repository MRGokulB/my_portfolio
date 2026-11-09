import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  const projects = [1, 9, 11].map((id) =>
    portfolioData.projects.find((project) => project.id === id)
  );
  return (
    <section id="projects" className="selected-work">
      <div className="container section">
        <div className="section-heading">
          <h2>
            Different problems.
            <br />
            Built all the way through.
          </h2>
          <p className="section-aside">
            A closer look at the interfaces, intelligence, and infrastructure I’ve shipped.
          </p>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured index={index} />
          ))}
        </div>
        <div className="work-footer">
          <span>Platforms, experiments, and a few things closer to home.</span>
          <Link to="/works" className="button button-light">
            Explore all {portfolioData.projects.length} projects
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

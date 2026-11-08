import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import ProjectCard from '../ProjectCard';
import Reveal from '../motion/Reveal';

export default function Projects() {
  const projects = portfolioData.projects.filter((project) => project.featured).slice(0, 3);
  return (
    <section id="projects" className="selected-work">
      <div className="container section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">A selection of what I do</p>
            <h2>
              Less talk.
              <br />
              <em>More shipped.</em>
            </h2>
          </div>
          <p className="section-aside">
            Different challenges. Thoughtful solutions.
            <br />A few projects I’m happy to put my name on.
          </p>
        </Reveal>
        <div className="project-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured index={index} />
          ))}
        </div>
        <div className="work-footer">
          <span>There’s more where these came from.</span>
          <Link to="/works" className="button button-light">
            Explore all {portfolioData.projects.length} projects{' '}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Github, Workflow, Braces, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

import { projectGroups } from '../data/projectGroups';

function ProjectArtwork({ project }) {
  if (project.id === 1 || project.id === 11) {
    return (
      <div className={`project-art screenshot-art ${project.id === 11 ? 'capture-art' : ''}`}>
        <div className="browser-preview">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>{project.id === 1 ? 'enclavia.ai' : 'Proposal capture & compliance'}</span>
          </div>
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            width="1440"
            height="900"
          />
        </div>
        <span className="art-label">Product in focus</span>
      </div>
    );
  }
  if (project.id === 9) {
    return (
      <div className="project-art javascript-art" aria-hidden="true">
        <div className="js-orbit" />
        <span className="js-symbol">JS</span>
        <div className="code-window">
          <div className="code-dots">
            <i />
            <i />
            <i />
            <span>under-the-hood.js</span>
          </div>
          <div className="code-body">
            <span>
              <b>const</b> curiosity = <em>Infinity</em>;
            </span>
            <span>
              <b>function</b> explore() {'{'}
            </span>
            <span>
              {' '}
              <b>return</b> understand();
            </span>
            <span>{'}'}</span>
            <span className="code-comment">// Beyond the syntax.</span>
          </div>
        </div>
        <span className="art-label">JavaScript, from the inside out.</span>
      </div>
    );
  }
  if (project.id === 10) {
    return (
      <div className="project-art algorithm-art" aria-hidden="true">
        <span className="diagram-label">A little structure. Infinite possibilities.</span>
        <div className="node-tree">
          <span className="tree-node root-node">08</span>
          <div className="tree-branches">
            <span className="tree-node">04</span>
            <span className="tree-node">12</span>
          </div>
          <div className="tree-leaves">
            <span>02</span>
            <span>06</span>
            <span>10</span>
            <span>14</span>
          </div>
        </div>
        <span className="art-label">DSA Universe / See how it works</span>
      </div>
    );
  }
  const Icon =
    projectGroups[project.id] === 'AI systems'
      ? Workflow
      : projectGroups[project.id] === 'Full stack'
        ? Layers
        : Braces;
  return (
    <div className={`project-art abstract-art abstract-${project.id % 3}`} aria-hidden="true">
      <div className="abstract-rings" />
      <Icon size={76} strokeWidth={1} />
      <span className="art-label">{project.title.split('(')[0].trim()}</span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const title = project.title.split('(')[0].trim();
  const hasRepository =
    project.githubUrl && project.githubUrl !== portfolioData.personal.social.github;
  return (
    <article className={`project-card${featured ? ' project-featured' : ''}`}>
      <ProjectArtwork project={project} />
      <div className="project-details">
        <span className="project-category">{projectGroups[project.id]}</span>
        <h3>{title}</h3>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.liveUrl ? (
            <a
              className="text-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} live`}
            >
              View project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <a
              className="text-link"
              href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(`Tell me about ${title}`)}`}
            >
              Discuss this project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
          {hasRepository && (
            <a
              className="source-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} source code`}
            >
              <Github size={16} aria-hidden="true" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

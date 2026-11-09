import { ArrowUpRight, Github, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { projectGroups } from '../data/projectGroups';

const newScreenshots = {
  9: 'js-universe-v3.png',
  10: 'dsa-universe-v3.png',
  7: 'mane-mess-v3.png',
  6: 'herbs-magic-v3.png',
  8: 'gcon-nanded-v3.png',
};
const diagrams = {
  2: {
    mark: 'Permissions,\nwithout friction.',
    steps: ['Roles', 'Tasks', 'Updates'],
    caption: 'Role-based collaboration and compliance tracking',
  },
  3: {
    mark: 'Find the\nright match.',
    steps: ['Documents', 'AI extraction', 'Matching'],
    caption: 'Document processing and candidate matching',
  },
};

function ProjectArtwork({ project }) {
  const src = newScreenshots[project.id]
    ? `${import.meta.env.BASE_URL}assets/${newScreenshots[project.id]}`
    : [1, 11].includes(project.id)
      ? project.image
      : null;
  if (src)
    return (
      <img
        className="project-image"
        src={src}
        alt={`${project.title.split('(')[0].trim()} website screenshot`}
        loading="lazy"
        width="1280"
        height="900"
      />
    );
  const data = diagrams[project.id];
  const category = projectGroups[project.id];
  return (
    <div
      className={`project-art project-spec spec-${category === 'AI systems' ? 'ai' : category === 'Full stack' ? 'full' : 'web'}`}
      role="img"
      aria-label={`Illustrative overview: ${data.caption}`}
    >
      <span className="spec-mark">
        {data.mark.split('\n').map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </span>
      <div className="spec-route">
        {data.steps.map((step, index) => (
          <span key={step}>
            {step}
            {index < 2 && <ChevronRight size={13} aria-hidden="true" />}
          </span>
        ))}
      </div>
      <span className="spec-caption">System overview: {data.caption}</span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const title = project.title.split('(')[0].trim();
  const hasRepository =
    project.githubUrl && project.githubUrl !== portfolioData.personal.social.github;
  return (
    <article
      className={`project-card${featured ? ' project-featured' : ''}`}
      id={`project-${project.id}`}
    >
      <div className="project-art-frame">
        <ProjectArtwork project={project} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <span className="project-category">{projectGroups[project.id]}</span>
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
              View project
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <a
              className="text-link"
              href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent('Tell me about ' + title)}`}
            >
              Discuss this project
              <ArrowUpRight size={17} aria-hidden="true" />
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

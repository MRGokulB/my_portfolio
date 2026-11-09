import { Braces, Database, Workflow, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';

const icons = [Braces, Database, Workflow];
const descriptions = [
  'The part people see, touch, and use. Components, interactions, and the browser underneath.',
  'The services and data behind the interface. From an API request to a container in the cloud.',
  'AI with a useful job to do. Structured outputs, retrieval, and background work that completes.',
];

export default function Skills({ showAboutLink = true }) {
  return (
    <section className="skills-section section container">
      <div className="section-heading">
        <h2>Across the stack.</h2>
        {showAboutLink && (
          <Link className="text-link" to="/about">
            A bit about me <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        )}
      </div>
      <div className="capability-grid">
        {portfolioData.skills.map((category, index) => {
          const Icon = icons[index];
          return (
            <article key={category.category} className="capability">
              <div className="capability-heading">
                <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <h3>{category.category}</h3>
                <p>{descriptions[index]}</p>
              </div>
              <ul>
                {category.items.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

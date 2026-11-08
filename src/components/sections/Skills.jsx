import { Braces, Database, Workflow, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import Reveal from '../motion/Reveal';

const icons = [Braces, Database, Workflow];
const descriptions = [
  'Interfaces that feel effortless, built on thoughtful component systems.',
  'Reliable APIs, deliberate data models, and infrastructure ready to grow.',
  'Intelligent workflows with structured outputs and useful automation.',
];

export default function Skills({ showAboutLink = true }) {
  return (
    <section className="skills-section section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What I bring to the table</p>
          <h2>
            Thoughtful on the outside.
            <br />
            <em>Solid underneath.</em>
          </h2>
        </div>
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
            <Reveal key={category.category} className="capability" delay={index * 0.08}>
              <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
              <h3>{category.category}</h3>
              <p>{descriptions[index]}</p>
              <ul>
                {category.items.map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

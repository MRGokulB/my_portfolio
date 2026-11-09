import { ArrowUpRight, Plus } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
  const experience = [...portfolioData.experience].sort((a, b) => {
    const order = [1, 5, 3, 4, 2];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });
  return (
    <section className="experience section container" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <h2 id="experience-title">Where I’ve been building.</h2>
        </div>
        <p className="section-aside">
          Product teams, independent projects, and the work in between.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((job) => (
          <details className="experience-row" key={job.id}>
            <summary>
              <span className="job-period">{job.period}</span>
              <span className="job-heading">
                <strong>{job.company}</strong>
                <span>{job.position}</span>
              </span>
              <span className="job-toggle">
                <Plus size={19} aria-hidden="true" />
              </span>
            </summary>
            <div className="job-content">
              <p>{job.description}</p>
              <ul>
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              {job.url && (
                <a className="text-link" href={job.url} target="_blank" rel="noreferrer">
                  Visit {job.company} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

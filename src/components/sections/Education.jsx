import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Education() {
  return (
    <section className="education-section section container">
      <div className="section-heading">
        <h2>Where it started.</h2>
        <GraduationCap size={32} strokeWidth={1.2} aria-hidden="true" />
      </div>
      <div className="education-grid">
        {portfolioData.education.degrees.map((degree) => (
          <article key={degree.id} className="education-card">
            <h3>{degree.degree}</h3>
            <span className="education-period">{degree.period}</span>
            <p>{degree.institution}</p>
            <span className="education-location">{degree.location}</span>
            <p className="education-description">{degree.description}</p>
          </article>
        ))}
      </div>
      <div className="learning-list">
        {portfolioData.education.additionalLearning.map((course) => (
          <div key={course.title}>
            <span>{course.title}</span>
            <span className="learning-meta">
              <span>{course.platform}</span>
              <time dateTime={course.year}>{course.year}</time>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

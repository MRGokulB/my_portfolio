import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Education() {
  return (
    <section className="education-section section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Foundations & fresh perspectives</p>
          <h2>
            Never done <em>learning.</em>
          </h2>
        </div>
        <GraduationCap size={32} strokeWidth={1.2} aria-hidden="true" />
      </div>
      <div className="education-grid">
        {portfolioData.education.degrees.map((degree) => (
          <article key={degree.id} className="education-card">
            <span className="education-period">{degree.period}</span>
            <h3>{degree.degree}</h3>
            <p>{degree.institution}</p>
            <span className="education-location">{degree.location}</span>
            <div className="education-grade">
              CGPA <strong>{degree.gpa}</strong>
            </div>
            <p className="education-description">{degree.description}</p>
          </article>
        ))}
      </div>
      <div className="learning-list">
        {portfolioData.education.additionalLearning.map((course) => (
          <div key={course.title}>
            <span>{course.title}</span>
            <span>
              {course.platform} · {course.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

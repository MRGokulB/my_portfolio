import { ArrowUpRight, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import PageHeading from '../PageHeading';
import Reveal from '../motion/Reveal';

export default function About() {
  const { personal } = portfolioData;
  return (
    <section className="about-section section container">
      <PageHeading
        title="The person behind"
        accent="the pull requests."
        aside="Gangaprasad Boddawar"
      />
      <div className="about-grid">
        <Reveal className="portrait-frame">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Gangaprasad Boddawar"
            width="896"
            height="1200"
          />
          <span className="portrait-caption">
            <MapPin size={14} aria-hidden="true" /> Nanded, India
          </span>
        </Reveal>
        <Reveal className="about-copy">
          <p className="about-lead">
            I’m Gangaprasad, a full stack engineer who cares as much about how a product feels as
            how it works.
          </p>
          <p>
            I build React and Next.js interfaces, Python and Node.js services, and AI workflows
            backed by PostgreSQL. My work includes enterprise platforms, learning tools, and
            everyday services.
          </p>
          <p>
            I like understanding how the pieces fit, then making them work well together. From an
            interaction in the browser to a job running in the cloud, the details matter.
          </p>
          <div className="about-facts">
            <div>
              <span>Based in</span>
              <strong>Nanded, Maharashtra</strong>
            </div>
            <div>
              <span>Working across</span>
              <strong>India & remote teams</strong>
            </div>
            <div>
              <span>Focused on</span>
              <strong>Web, AI & cloud</strong>
            </div>
            <div>
              <span>Approach</span>
              <strong>Build. Learn. Refine.</strong>
            </div>
          </div>
          <a
            className="button button-primary"
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
          >
            View my résumé <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

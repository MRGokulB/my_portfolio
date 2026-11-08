import { ArrowUpRight, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import PageHeading from '../PageHeading';
import Reveal from '../motion/Reveal';

export default function About() {
  const { personal } = portfolioData;
  return (
    <section className="about-section section container">
      <PageHeading
        label="A bit about me"
        title="A builder’s mind."
        accent="A human perspective."
        aside="Gangaprasad Boddawar / Nanded, India"
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
          <p>{personal.bio}</p>
          <p>
            My work connects the pieces: a thoughtful interface, a dependable backend, and AI that
            has a useful job to do. I enjoy getting into the details and making complex systems
            easier to use.
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

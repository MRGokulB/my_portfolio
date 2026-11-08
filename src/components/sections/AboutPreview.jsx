import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '../motion/Reveal';
import { portfolioData } from '../../data/portfolio';

export default function AboutPreview() {
  return (
    <section className="about-preview container section">
      <Reveal className="about-preview-portrait">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Gangaprasad Boddawar"
          width="896"
          height="1200"
          loading="lazy"
        />
        <span>
          <MapPin size={15} aria-hidden="true" /> Nanded, India
        </span>
      </Reveal>
      <Reveal className="about-preview-copy">
        <p className="eyebrow">The human behind the code</p>
        <h2>
          Engineer by trade.
          <br />
          <em>Curious by default.</em>
        </h2>
        <p>
          I’m Gangaprasad, a full stack engineer working at the intersection of thoughtful
          interfaces, dependable infrastructure, and AI that earns its place.
        </p>
        <div className="about-preview-facts">
          <div>
            <strong>2+</strong>
            <span>Years in production</span>
          </div>
          <div>
            <strong>{portfolioData.projects.length.toString().padStart(2, '0')}</strong>
            <span>Projects to explore</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Things left to learn</span>
          </div>
        </div>
        <Link className="text-link" to="/about">
          A little more about me <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}

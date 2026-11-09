import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <h2>
          A product to build.
          <br />A team to join.
        </h2>
        <div className="contact-banner-content">
          <p>I’m open to full stack and AI work. Let’s talk about what you’re building.</p>
          <Link
            to="/contact"
            className="button button-primary"
            aria-label="Let’s talk about your project"
          >
            Let’s talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <a className="text-link" href={`mailto:${portfolioData.personal.email}`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}

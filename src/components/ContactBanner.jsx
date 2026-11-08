import { Link } from 'react-router-dom';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import Reveal from './motion/Reveal';

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <Reveal className="contact-banner-top">
          <p className="eyebrow">The next good thing starts with a hello.</p>
          <Asterisk size={31} strokeWidth={1.3} aria-hidden="true" />
        </Reveal>
        <Link
          to="/contact"
          className="contact-banner-link"
          aria-label="Let’s talk about your project"
        >
          <h2>
            Let’s make
            <br />
            <em>something good.</em>
          </h2>
          <span className="contact-orbit">
            <ArrowUpRight size={56} strokeWidth={1.2} aria-hidden="true" />
          </span>
        </Link>
        <div className="contact-banner-bottom">
          <span>Have an idea, a project, or a role in mind?</span>
          <span>Always happy to talk.</span>
        </div>
      </div>
    </section>
  );
}

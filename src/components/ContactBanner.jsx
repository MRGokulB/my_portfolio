import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="contact-banner container">
      <div>
        <p className="eyebrow">Good things start with a conversation</p>
        <h2>
          Have something
          <br />
          in mind?
        </h2>
        <p>Let’s turn “what if” into something real.</p>
      </div>
      <Link to="/contact" className="contact-orbit" aria-label="Let’s talk about your project">
        <ArrowUpRight size={44} strokeWidth={1.3} aria-hidden="true" />
        <span>Let’s talk</span>
      </Link>
    </section>
  );
}

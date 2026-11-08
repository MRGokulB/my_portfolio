import { ArrowUpRight, Asterisk } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../motion/Reveal';

export default function Introduction() {
  return (
    <section className="introduction container section">
      <div className="intro-label">
        <Asterisk size={30} strokeWidth={1.2} aria-hidden="true" />
        <p className="eyebrow">A little about the way I build</p>
      </div>
      <Reveal className="intro-statement">
        <h2>
          Complex under the hood.
          <br />
          <em>Effortless in your hands.</em>
        </h2>
        <div className="intro-bottom">
          <p>
            From the first interaction to the last API call, I connect the details that make a
            product feel right.
          </p>
          <Link className="text-link" to="/about">
            Meet the engineer <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

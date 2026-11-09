import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import BuildStack from '../visuals/BuildStack';

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <motion.div
        className="hero-heading"
        initial={{ y: reduced ? 0 : 12 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 id="hero-title">
          From first click
          <br />
          to final deploy.
        </h1>
        <div className="hero-intro">
          <p>I’m Gangaprasad. I build interfaces, AI, and the cloud systems underneath.</p>
          <div className="hero-actions">
            <Link to="/works" className="button button-primary">
              Explore my work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              View résumé
            </a>
          </div>
        </div>
      </motion.div>
      <BuildStack />
      <div className="hero-bottom">
        <span>Full stack engineer. Based in India.</span>
        <button
          className="scroll-prompt"
          type="button"
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
          }
        >
          A few things I’ve built
          <ArrowDown size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

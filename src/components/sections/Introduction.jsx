import { Braces, Cpu, Cloud, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section className="introduction container">
      <div className="intro-statement">
        <h2>The interface is just the beginning.</h2>
        <p>
          At Enclavia, my work connects React interfaces, AI workflows, and containerized services.
          I like knowing how the whole thing fits together.
        </p>
        <Link className="text-link" to="/about">
          Meet the engineer
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <div className="system-diagram" aria-label="Technologies used in my Enclavia work">
        <div className="system-node">
          <Braces size={28} aria-hidden="true" />
          <div>
            <strong>What people use</strong>
            <span>React interfaces and product experiences</span>
          </div>
        </div>
        <div className="system-node">
          <Cpu size={28} aria-hidden="true" />
          <div>
            <strong>What makes it useful</strong>
            <span>FastAPI, retrieval, and structured AI outputs</span>
          </div>
        </div>
        <div className="system-node">
          <Cloud size={28} aria-hidden="true" />
          <div>
            <strong>What keeps it running</strong>
            <span>Docker, Cloud Run, and deployment pipelines</span>
          </div>
        </div>
      </div>
    </section>
  );
}

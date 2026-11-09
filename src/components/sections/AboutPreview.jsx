import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="about-preview container">
      <div className="about-preview-portrait">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Gangaprasad Boddawar"
          width="896"
          height="1200"
          loading="lazy"
        />
        <span>
          <MapPin size={15} aria-hidden="true" />
          Nanded, India
        </span>
      </div>
      <div className="about-preview-copy">
        <h2>
          The human
          <br />
          in the loop.
        </h2>
        <p>
          I’m Gangaprasad. I enjoy the space between how something feels and how it works, whether
          that’s an AI platform or a tool for everyday life.
        </p>
        <div className="about-tools">
          <span>Interfaces</span>
          <span>AI systems</span>
          <span>Cloud engineering</span>
        </div>
        <Link className="text-link" to="/about">
          A little more about me
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

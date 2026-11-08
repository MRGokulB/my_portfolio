import Reveal from './motion/Reveal';

export default function PageHeading({ label, title, accent, children, aside }) {
  return (
    <div className="page-heading">
      <Reveal>
        <p className="eyebrow">{label}</p>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        {children && <p className="page-description">{children}</p>}
      </Reveal>
      {aside && <span className="page-heading-aside">{aside}</span>}
    </div>
  );
}

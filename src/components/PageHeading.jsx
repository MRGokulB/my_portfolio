import Reveal from './motion/Reveal';

export default function PageHeading({ label, title, accent, children, aside }) {
  return (
    <header className="page-heading">
      <Reveal>
        <h1>
          <span>{title}</span>
          {accent && (
            <>
              <br />
              <span>{accent}</span>
            </>
          )}
        </h1>
        {children && <p className="page-description">{children}</p>}
        {label && <p className="page-context">{label}</p>}
      </Reveal>
      {aside && <span className="page-heading-aside">{aside}</span>}
    </header>
  );
}

import { useEffect, useRef } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/works' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout() {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 32 });
  const previousPath = useRef(pathname);
  const mainRef = useRef(null);
  const { personal } = portfolioData;

  useEffect(() => {
    const page = navigation.find((item) => item.path === pathname)?.name || 'Home';
    document.title = `${page === 'Home' ? 'Full Stack & AI Engineer' : page} — ${personal.name}`;
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname, personal.name]);

  return (
    <div className="site-shell">
      {!reducedMotion && (
        <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
      )}
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header container">
        <Link className="brand" to="/" aria-label="Gangaprasad Boddawar, home">
          <span className="brand-mark">
            gb<span>.</span>
          </span>
          <span className="brand-name">
            Gangaprasad
            <br />
            Boddawar
          </span>
        </Link>
        <nav className="navigation" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="nav-active"
                      layoutId="navigation-pill"
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 360, damping: 32 }
                      }
                    />
                  )}
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="header-contact">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </header>
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <motion.div
          key={pathname}
          initial={{ y: reducedMotion ? 0 : 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <footer className="site-footer container">
        <Link to="/" className="footer-name">
          Gangaprasad Boddawar<span>Interfaces, intelligence, and the systems underneath.</span>
        </Link>
        <div className="footer-socials">
          <a href={personal.social.github} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub{' '}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn{' '}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Gangaprasad Boddawar</span>
      </footer>
    </div>
  );
}

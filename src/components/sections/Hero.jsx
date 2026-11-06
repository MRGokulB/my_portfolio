import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const OrbitalScene = lazy(() => import('../visuals/OrbitalScene'));

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2');
    setCanRender(Boolean(context));
    context?.getExtension('WEBGL_lose_context')?.loseContext();
  }, []);

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="availability">
          <span className="status-dot" /> Available for interesting projects
        </span>
        <span className="hero-location">Based in India. Building everywhere.</span>
      </div>
      <div className="hero-composition">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-intro">
            Hi, I’m Gangaprasad <span className="intro-line" />
          </p>
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            Powerful
            <br />
            <span className="hero-outline">possibilities.</span>
          </h1>
          <p className="hero-description">
            Full stack engineer turning complex challenges into intuitive experiences, intelligent
            systems, and products that work.
          </p>
          <div className="hero-actions">
            <Link to="/works" className="button button-primary">
              Explore my work <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="button button-quiet"
            >
              View résumé <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        <div className={`hero-art${sceneReady ? ' scene-ready' : ''}`}>
          <div className="orbital-fallback" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="scene-container" aria-hidden="true">
            {canRender && (
              <SceneBoundary onError={() => setSceneReady(false)}>
                <Suspense fallback={null}>
                  <OrbitalScene
                    paused={paused || Boolean(reducedMotion)}
                    onReady={() => setSceneReady(true)}
                  />
                </Suspense>
              </SceneBoundary>
            )}
          </div>
          <span className="art-coordinate art-coordinate-top" aria-hidden="true">
            Ideas, interconnected.
          </span>
          <div className="art-caption">
            <span>
              <span className="small-cross" aria-hidden="true">
                +
              </span>{' '}
              A little curiosity. A lot of craft.
            </span>
            {sceneReady && !reducedMotion && (
              <button
                className="scene-toggle"
                type="button"
                onClick={() => setPaused(!paused)}
                aria-label={paused ? 'Play 3D animation' : 'Pause 3D animation'}
                aria-pressed={paused}
              >
                {paused ? (
                  <Play size={13} aria-hidden="true" />
                ) : (
                  <Pause size={13} aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-disciplines">
          <span>Full stack development</span>
          <i />
          <span>AI engineering</span>
          <i />
          <span>Cloud architecture</span>
        </div>
        <button
          type="button"
          className="scroll-prompt"
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
          }
        >
          A few things I’ve built <ArrowDown size={15} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

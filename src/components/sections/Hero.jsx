import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Pause, Play, Asterisk } from 'lucide-react';
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
  const hero = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const [paused, setPaused] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const { personal } = portfolioData;
  const showFallback = useCallback(() => {
    setSceneReady(false);
    setCanRender(false);
  }, []);

  useEffect(() => {
    try {
      const context = document.createElement('canvas').getContext('webgl2');
      setCanRender(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setCanRender(false);
    }
  }, []);

  return (
    <section className="hero container" ref={hero} aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">Independent mind. Full stack engineer.</span>
        <span className="availability">
          <span className="status-dot" /> Open for collaboration
        </span>
      </div>
      <div className="hero-composition">
        <motion.div className="hero-copy" style={{ y: reducedMotion ? 0 : copyY }}>
          <motion.h1
            id="hero-title"
            initial={{ y: reducedMotion ? 0 : 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Good ideas.
            <br />
            <em>Built to last.</em>
          </motion.h1>
          <p className="hero-description">
            I’m Gangaprasad. I bring thoughtful interfaces, reliable systems, and useful AI together
            to build things that matter.
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
              View résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-signature">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="" width="46" height="46" />
            <div>
              <strong>Gangaprasad Boddawar</strong>
              <span>Based in India. Building beyond borders.</span>
            </div>
          </div>
        </motion.div>
        <div className={`hero-art${sceneReady ? ' scene-ready' : ''}`}>
          <div className="art-orbit" aria-hidden="true" />
          <div className="orbital-fallback" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="scene-container" aria-hidden="true">
            {canRender && (
              <SceneBoundary onError={showFallback}>
                <Suspense fallback={null}>
                  <OrbitalScene
                    progress={scrollYProgress}
                    paused={paused || Boolean(reducedMotion)}
                    onReady={() => setSceneReady(true)}
                    onLost={showFallback}
                  />
                </Suspense>
              </SceneBoundary>
            )}
          </div>
          <span className="art-note art-note-top">
            <Asterisk size={16} aria-hidden="true" /> A different perspective.
          </span>
          <div className="art-caption">
            <span>Form follows curiosity.</span>
            {sceneReady && !reducedMotion && (
              <button
                type="button"
                className="scene-toggle"
                aria-label={paused ? 'Play 3D animation' : 'Pause 3D animation'}
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
              >
                {paused ? (
                  <Play size={14} aria-hidden="true" />
                ) : (
                  <Pause size={14} aria-hidden="true" />
                )}
                <span>{paused ? 'Motion off' : 'Motion on'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-disciplines">
          <span>Web experiences</span>
          <Asterisk size={13} aria-hidden="true" />
          <span>AI systems</span>
          <Asterisk size={13} aria-hidden="true" />
          <span>Cloud architecture</span>
        </div>
        <button
          className="scroll-prompt"
          type="button"
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' })
          }
        >
          A few things I’ve built <ArrowDown size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

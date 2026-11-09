import { useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, Braces, Cpu, Database, Grip, RotateCcw } from 'lucide-react';
import { buildLayers } from '../../data/buildLayers';
import { portfolioData } from '../../data/portfolio';

const icons = [Braces, Cpu, Database];
const positions = [92, 0, -92];

export default function BuildStack() {
  const [active, setActive] = useState(0);
  const [separated, setSeparated] = useState(true);
  const [dragging, setDragging] = useState(false);
  const reduced = useReducedMotion();
  const pointer = useRef(null);
  const stage = useRef(null);
  const yaw = useMotionValue(-28);
  const pitch = useMotionValue(55);
  const rotateX = useSpring(pitch, { stiffness: 170, damping: 30 });
  const rotateZ = useSpring(yaw, { stiffness: 170, damping: 30 });
  const layer = buildLayers[active];
  const project = portfolioData.projects.find((item) => item.id === layer.projectId);

  function reset() {
    yaw.set(-28);
    pitch.set(55);
    setActive(0);
    setSeparated(true);
  }
  function pointerDown(event) {
    if (reduced || event.pointerType === 'touch' || event.button !== 0) return;
    const selected = event.target.closest('[data-layer-index]')?.dataset.layerIndex;
    pointer.current = {
      x: event.clientX,
      y: event.clientY,
      yaw: yaw.get(),
      pitch: pitch.get(),
      moved: false,
      selected,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function pointerMove(event) {
    if (!pointer.current) return;
    const dx = event.clientX - pointer.current.x;
    const dy = event.clientY - pointer.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) pointer.current.moved = true;
    yaw.set(Math.max(-52, Math.min(0, pointer.current.yaw + dx * 0.17)));
    pitch.set(Math.max(35, Math.min(68, pointer.current.pitch - dy * 0.12)));
  }
  function pointerUp(event) {
    if (!pointer.current) return;
    setDragging(false);
    if (
      event.type !== 'pointercancel' &&
      !pointer.current.moved &&
      pointer.current.selected !== undefined
    ) {
      setActive(Number(pointer.current.selected));
      setSeparated(true);
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    // Keep the moved flag through the ensuing click so dragging never selects a layer.
    window.setTimeout(() => {
      pointer.current = null;
    }, 0);
  }

  return (
    <div
      className="build-explorer"
      data-layer={layer.id}
      data-separated={separated}
      data-reduced-motion={Boolean(reduced)}
    >
      <div className="stack-navigation">
        <p className="stack-instruction">
          Choose a layer.
          <br />
          See what’s underneath.
        </p>
        <div className="layer-options" aria-label="Explore the build stack">
          {buildLayers.map((item, index) => {
            const Icon = icons[index];
            return (
              <button
                key={item.id}
                type="button"
                className={`layer-option layer-${item.id}`}
                aria-pressed={active === index}
                aria-controls="layer-detail"
                onClick={() => {
                  setActive(index);
                  setSeparated(true);
                }}
              >
                <span className="layer-symbol">
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span>{item.label}</span>
                <span className="layer-selection" aria-hidden="true" />
              </button>
            );
          })}
        </div>
        <div className="stack-utility">
          <button type="button" aria-pressed={!separated} onClick={() => setSeparated(!separated)}>
            {separated ? 'Bring it together' : 'Pull it apart'}
          </button>
          <button type="button" aria-label="Reset stack view" onClick={reset}>
            <RotateCcw size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`stack-stage${dragging ? ' is-dragging' : ''}`}
        ref={stage}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        onPointerCancel={pointerUp}
      >
        <div className="stack-ground" aria-hidden="true" />
        <motion.div
          className="stack-machine"
          style={{ rotateX: reduced ? 55 : rotateX, rotateZ: reduced ? -28 : rotateZ }}
        >
          {buildLayers.map((item, index) => {
            const Icon = icons[index];
            const z = separated ? positions[index] + (active === index ? 27 : 0) : 22 - index * 31;
            return (
              <motion.div
                key={item.id}
                data-layer-index={index}
                className={`stack-module module-${item.id}${active === index ? ' is-selected' : ''}`}
                animate={{ z, x: separated && active === index ? -14 : 0 }}
                transition={
                  reduced ? { duration: 0 } : { type: 'spring', stiffness: 130, damping: 24 }
                }
              >
                <div className="module-side module-front" aria-hidden="true">
                  <span>{item.projectName}</span>
                  <span>{item.legend}</span>
                </div>
                <div className="module-side module-right" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="module-side module-back" aria-hidden="true" />
                <div className="module-side module-left" aria-hidden="true" />
                <div
                  aria-hidden="true"
                  className="module-face"
                  onClick={() => {
                    if (!pointer.current?.moved) {
                      setActive(index);
                      setSeparated(true);
                    }
                  }}
                >
                  <span className="module-header">
                    <Icon size={25} strokeWidth={1.7} />
                    <span>{item.projectName}</span>
                  </span>
                  <span className="module-legend">{item.legend}</span>
                  <img
                    className="module-screenshot"
                    src={`${import.meta.env.BASE_URL}assets/${item.image}`}
                    alt=""
                    width="1280"
                    height="900"
                  />
                  <span className="module-tools">{item.tools.join(' / ')}</span>
                  <span className="module-connector">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <span className="stack-drag-hint" aria-hidden="true">
          <Grip size={15} /> Drag to find your angle
        </span>
      </div>

      <div
        className="stack-proof"
        id="layer-detail"
        role="region"
        aria-label="Selected layer project"
      >
        <div className="proof-live" aria-live="polite" aria-atomic="true">
          <span className={`proof-key proof-${layer.id}`} aria-hidden="true">
            {layer.legend}
          </span>
          <h2>{layer.title}</h2>
          <p>{layer.description}</p>
          <strong className="proof-project">{layer.projectName}</strong>
        </div>
        <a
          className="text-link"
          href={
            project.liveUrl ||
            `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent('Tell me about ' + layer.projectName)}`
          }
          target={project.liveUrl ? '_blank' : undefined}
          rel={project.liveUrl ? 'noreferrer' : undefined}
        >
          {project.liveUrl ? 'Open the project' : 'Discuss the project'}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

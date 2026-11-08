import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { DoubleSide, MathUtils } from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

function ribbon(u, v, target) {
  const angle = u * Math.PI * 2;
  const width = (v - 0.5) * 1.6;
  const radius = 1.65 + width * Math.cos(angle / 2);
  target.set(radius * Math.cos(angle), radius * Math.sin(angle), width * Math.sin(angle / 2));
}

function Sculpture({ progress, paused, onLost }) {
  const sculpture = useRef(null);
  const target = useRef({ scroll: 0, x: 0, y: 0 });
  const { invalidate, gl } = useThree();
  const geometry = useMemo(() => new ParametricGeometry(ribbon, 128, 24), []);

  useEffect(() => () => geometry.dispose(), [geometry]);
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (event) => {
      event.preventDefault();
      onLost();
    };
    canvas.addEventListener('webglcontextlost', lost);
    return () => canvas.removeEventListener('webglcontextlost', lost);
  }, [gl, onLost]);
  useEffect(() => {
    if (paused) return;
    const updateScroll = (value) => {
      target.current.scroll = value;
      invalidate();
    };
    updateScroll(progress.get());
    const unsubscribe = progress.on('change', updateScroll);
    const move = (event) => {
      if (event.pointerType === 'touch') return;
      const rect = gl.domElement.getBoundingClientRect();
      target.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      invalidate();
    };
    const reset = () => {
      target.current.x = 0;
      target.current.y = 0;
      invalidate();
    };
    gl.domElement.addEventListener('pointermove', move);
    gl.domElement.addEventListener('pointerleave', reset);
    return () => {
      unsubscribe();
      gl.domElement.removeEventListener('pointermove', move);
      gl.domElement.removeEventListener('pointerleave', reset);
    };
  }, [progress, paused, invalidate, gl]);

  useFrame((state, delta) => {
    if (paused || document.hidden || !sculpture.current) return;
    const aim = target.current;
    const desired = [
      1 + aim.y * 0.1,
      -0.75 + aim.scroll * 0.8 + aim.x * 0.13,
      -0.45 + aim.scroll * 0.22,
    ];
    const rotation = sculpture.current.rotation;
    const step = Math.min(delta, 0.04);
    rotation.x = MathUtils.damp(rotation.x, desired[0], 6, step);
    rotation.y = MathUtils.damp(rotation.y, desired[1], 6, step);
    rotation.z = MathUtils.damp(rotation.z, desired[2], 6, step);
    if (
      Math.abs(rotation.x - desired[0]) +
        Math.abs(rotation.y - desired[1]) +
        Math.abs(rotation.z - desired[2]) >
      0.001
    )
      state.invalidate();
  });

  return (
    <group ref={sculpture} rotation={[1, -0.75, -0.45]}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#bba3e8"
          side={DoubleSide}
          metalness={0.65}
          roughness={0.28}
          clearcoat={1}
          clearcoatRoughness={0.2}
          envMapIntensity={1.25}
        />
      </mesh>
    </group>
  );
}

export default function OrbitalScene({ progress, paused, onReady, onLost }) {
  const host = useRef(null);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [dpr, setDpr] = useState(1);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: '40px',
    });
    if (host.current) observer.observe(host.current);
    const visibility = () => setPageVisible(!document.hidden);
    const resize = () =>
      setDpr(window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 1.5));
    visibility();
    resize();
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('resize', resize);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div
      ref={host}
      className="webgl-host"
      data-animation={paused || !visible || !pageVisible ? 'paused' : 'playing'}
      data-render-mode="demand"
    >
      <Canvas
        camera={{ position: [0, 0, 7.6], fov: 40 }}
        dpr={dpr}
        frameloop="demand"
        resize={{ scroll: false }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        fallback={null}
        onCreated={onReady}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[-3, 4, 5]} intensity={2} color="#f7f2ff" />
        <Sculpture
          progress={progress}
          paused={paused || !visible || !pageVisible}
          onLost={onLost}
        />
        <Environment resolution={128}>
          <color attach="background" args={['#66616e']} />
          <Lightformer intensity={3} position={[0, 4, 3]} scale={[8, 3, 1]} />
          <Lightformer
            intensity={2}
            position={[-5, 0, 2]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[8, 4, 1]}
          />
          <Lightformer
            intensity={3}
            color="#ad89e8"
            position={[4, 1, 1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[5, 8, 1]}
          />
          <Lightformer
            intensity={1.5}
            position={[0, -4, 3]}
            rotation={[Math.PI / 3, 0, 0]}
            scale={[6, 2, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

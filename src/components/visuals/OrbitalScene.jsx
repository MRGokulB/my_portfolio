import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { MathUtils } from 'three';

function Sculpture({ paused }) {
  const sculpture = useRef();
  const time = useRef(0);
  useFrame((state, delta) => {
    if (paused || !sculpture.current) return;
    time.current += Math.min(delta, 0.05);
    const group = sculpture.current;
    group.rotation.y = time.current * 0.12;
    group.rotation.x = MathUtils.damp(group.rotation.x, 0.22 + state.pointer.y * 0.12, 3, delta);
    group.rotation.z = MathUtils.damp(group.rotation.z, -0.32 + state.pointer.x * 0.1, 3, delta);
    group.position.y = Math.sin(time.current * 0.5) * 0.09;
  });
  return (
    <group ref={sculpture} rotation={[0.22, 0, -0.32]} scale={0.82}>
      <mesh>
        <torusKnotGeometry args={[1.5, 0.43, 192, 32, 2, 3]} />
        <meshStandardMaterial
          color="#c6d5ed"
          metalness={0.94}
          roughness={0.28}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0.2, 0]}>
        <torusGeometry args={[2.34, 0.012, 8, 160]} />
        <meshBasicMaterial color="#8eaad2" transparent opacity={0.45} />
      </mesh>
      <mesh position={[2.34, 0, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#c4dcff" />
      </mesh>
    </group>
  );
}

export default function OrbitalScene({ paused, onReady }) {
  const host = useRef(null);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: '40px',
    });
    if (host.current) observer.observe(host.current);
    const handleVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);
  return (
    <div className="webgl-host" ref={host} data-animation={paused ? 'paused' : 'playing'}>
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 39 }}
        dpr={[1, 1.5]}
        frameloop={paused || !visible || !pageVisible ? 'demand' : 'always'}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        fallback={null}
        onCreated={onReady}
      >
        <ambientLight intensity={0.2} />
        <Sculpture paused={paused} />
        <Environment resolution={128}>
          <Lightformer intensity={3} position={[0, 5, -2]} scale={[10, 3, 1]} />
          <Lightformer
            intensity={3}
            position={[-5, 1, 3]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[10, 3, 1]}
          />
          <Lightformer
            intensity={4}
            color="#5386e4"
            position={[5, -1, 2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[10, 5, 1]}
          />
          <Lightformer
            intensity={1.5}
            position={[0, -4, 1]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[8, 3, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

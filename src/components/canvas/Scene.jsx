import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, MeshDistortMaterial, Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Particle Field with flowing motion
const ParticleField = ({ count = 2000 }) => {
  const points = useRef();
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create particle clusters
      const cluster = Math.floor(Math.random() * 3);
      const radius = 20 + cluster * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions.set([x, y, z], i * 3);
      
      // Gradient colors based on position
      const colorMix = (y + radius) / (radius * 2);
      colors.set([
        0.2 + colorMix * 0.5, // Cyan to Purple
        0.5 - colorMix * 0.3,
        0.8 + colorMix * 0.2
      ], i * 3);
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.elapsedTime;
      points.current.rotation.y = time * 0.03;
      points.current.rotation.x = Math.sin(time * 0.02) * 0.1;
      
      // Subtle wave motion
      const positions = points.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] += Math.sin(time + x * 0.1 + z * 0.1) * 0.002;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.positions.length / 3}
          array={particlesPosition.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesPosition.colors.length / 3}
          array={particlesPosition.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Geometric Floating Shape Component
const GeometricShape = ({ position, type, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed;
      
      // Complex rotation patterns
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2 + time * 0.1;
      meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.3 + time * 0.15;
      meshRef.current.rotation.z = Math.sin(time * 0.25) * 0.1;
      
      // Floating motion with multiple sine waves for more organic movement
      const baseY = position[1];
      meshRef.current.position.y = baseY + 
        Math.sin(time * 0.5) * 0.8 + 
        Math.sin(time * 1.2) * 0.3;
      
      meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.4;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.4) * 0.4;
      
      // Pulsing glow
      if (glowRef.current) {
        glowRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
      }
    }
  });

  const geometries = {
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    octahedron: <octahedronGeometry args={[1.2, 0]} />,
    tetrahedron: <tetrahedronGeometry args={[1.3, 0]} />,
    torusKnot: <torusKnotGeometry args={[0.6, 0.25, 100, 16]} />,
    cone: <coneGeometry args={[0.8, 1.5, 8]} />,
  };

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Outer glow */}
        <mesh ref={glowRef} scale={1.3}>
          {geometries[type]}
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Main shape */}
        <mesh ref={meshRef} scale={scale}>
          {geometries[type]}
          <MeshDistortMaterial
            color={color}
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Wireframe overlay */}
        <mesh scale={scale * 1.01}>
          {geometries[type]}
          <meshBasicMaterial
            color={color}
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};

// Enhanced Orb with rings
const PremiumOrb = ({ position, color, intensity = 1 }) => {
  const orbRef = useRef();
  const ringsRef = useRef([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (orbRef.current) {
      orbRef.current.rotation.y = time * 0.2;
      orbRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;
    }

    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = time * (0.3 + i * 0.1);
        ring.rotation.y = time * (0.2 - i * 0.05);
      }
    });
  });

  return (
    <group position={position}>
      {/* Core orb */}
      <mesh ref={orbRef}>
        <Sphere args={[0.8, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={3}
            roughness={0}
            metalness={1}
            emissive={color}
            emissiveIntensity={intensity}
          />
        </Sphere>
      </mesh>

      {/* Orbital rings */}
      {[1.5, 2, 2.5].map((radius, i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3 - i * 0.08}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}

      {/* Point light */}
      <pointLight
        color={color}
        intensity={intensity * 2}
        distance={10}
        decay={2}
      />
    </group>
  );
};
 

// Animated grid background
const GridBackground = () => {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 2) % 20 - 10;
    }
  });

  return (
    <group ref={gridRef} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[50, 50, '#00d4ff', '#a855f7']} />
    </group>
  );
};

// Main Scene Component
const Scene = () => {
  const shapes = [
    { type: 'dodecahedron', position: [-6, 3, -8], color: '#00d4ff', scale: 0.8, speed: 0.8 },
    { type: 'icosahedron', position: [7, -2, -10], color: '#a855f7', scale: 0.9, speed: 0.6 },
    { type: 'octahedron', position: [-5, -3, -6], color: '#ec4899', scale: 0.7, speed: 1 },
    { type: 'torusKnot', position: [6, 4, -12], color: '#14b8a6', scale: 0.6, speed: 0.7 },
    ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00d4ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#a855f7" />
        
        {/* Premium orbs with rings  
        <PremiumOrb position={[-8, 2, -5]} color="#00d4ff" intensity={1.5} />
        <PremiumOrb position={[8, -3, -7]} color="#ec4899" intensity={1.2} /> */}
        
        
        {/* Geometric shapes 
        {shapes.map((shape, index) => (
          <GeometricShape key={index} {...shape} />
        ))}  */}
          
        
        {/* Enhanced particle field */}
        <ParticleField count={2000} />
        
        {/* Animated stars */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {/* Subtle grid */} 
        <GridBackground />
        
        {/* Environment lighting */}
        <Environment preset="night" />
        
        {/* Camera controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default Scene;
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, useTexture, Trail, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Galaxy Spiral Arms
const GalaxyArms = () => {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    const count = 8000;
    
    for (let i = 0; i < count; i++) {
      // Spiral galaxy equation
      const angle = (i / count) * Math.PI * 8; // Multiple rotations
      const radius = (i / count) * 25; // Spread outward
      const armOffset = Math.floor(Math.random() * 4) * (Math.PI / 2); // 4 spiral arms
      
      const x = Math.cos(angle + armOffset) * radius + (Math.random() - 0.5) * 2;
      const y = (Math.random() - 0.5) * 2 - Math.pow(radius / 25, 2) * 3; // Slight curve
      const z = Math.sin(angle + armOffset) * radius + (Math.random() - 0.5) * 2;
      
      positions.push(x, y, z);
      
      // Color based on distance from center (blue core, orange edges)
      const distanceFromCenter = radius / 25;
      colors.push(
        0.3 + distanceFromCenter * 0.7,  // R: blue to orange
        0.5 + distanceFromCenter * 0.3,  // G
        1.0 - distanceFromCenter * 0.5   // B: bright blue to dimmer
      );
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

 

 
 

// Shooting Stars
const ShootingStars = () => {
  const starsRef = useRef([]);

  useFrame((state) => {
    starsRef.current.forEach((star, i) => {
      if (star) {
        const speed = 0.2 + (i * 0.1);
        star.position.x -= speed;
        star.position.y -= speed * 0.5;
        
        if (star.position.x < -20) {
          star.position.x = 20;
          star.position.y = Math.random() * 10 - 5;
          star.position.z = Math.random() * -20 - 5;
        }
      }
    });
  });

  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <Trail
          key={i}
          width={0.5}
          length={6}
          color="#ffffff"
          attenuation={(t) => t * t}
        >
          <mesh
            ref={(el) => (starsRef.current[i] = el)}
            position={[
              Math.random() * 40 - 20,
              Math.random() * 10 - 5,
              Math.random() * -20 - 5
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </Trail>
      ))}
    </group>
  );
};


// Main Scene Component
const CreativeScene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Canvas
        camera={{ position: [0, 3, 12], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
           
        
          
          {/* Shooting stars effect */}
          <ShootingStars />
          
          {/* Animated stars */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          
          {/* Space dust sparkles */}
          <Sparkles
            count={200}
            scale={20}
            size={2}
            speed={0.3}
            opacity={0.6}
            color="#00d4ff"
          />
          
          {/* Camera controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.5}
            enableDamping
            dampingFactor={0.05}
            minDistance={8}
            maxDistance={15}
          />
        </Suspense>
      </Canvas>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
           style={{ 
             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)' 
           }} 
      />
    </div>
  );
};

export default CreativeScene;
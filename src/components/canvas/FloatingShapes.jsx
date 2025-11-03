import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, geometry, speed, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return (
          <Sphere args={[1, 32, 32]} scale={scale}>
            <MeshDistortMaterial
              color="#00d4ff"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        );
      case 'torus':
        return (
          <Torus args={[1, 0.4, 16, 100]} scale={scale}>
            <MeshDistortMaterial
              color="#a855f7"
              attach="material"
              distort={0.2}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Torus>
        );
      case 'box':
        return (
          <Box args={[1.5, 1.5, 1.5]} scale={scale}>
            <MeshDistortMaterial
              color="#ec4899"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Box>
        );
      case 'octahedron':
        return (
          <Octahedron args={[1.2]} scale={scale}>
            <MeshDistortMaterial
              color="#14b8a6"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Octahedron>
        );
      default:
        return null;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
    </mesh>
  );
};

const FloatingShapes = () => {
  const shapes = [
    { geometry: 'sphere', position: [-4, 2, -5], speed: 0.01, scale: 0.8 },
    { geometry: 'torus', position: [4, -2, -8], speed: 0.008, scale: 0.6 },
    { geometry: 'box', position: [-5, -3, -6], speed: 0.012, scale: 0.5 },
    { geometry: 'octahedron', position: [5, 3, -7], speed: 0.009, scale: 0.7 },
    { geometry: 'sphere', position: [0, -4, -10], speed: 0.007, scale: 0.9 },
    { geometry: 'torus', position: [-3, 4, -9], speed: 0.011, scale: 0.55 },
  ];

  return (
    <group>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </group>
  );
};

export default FloatingShapes;
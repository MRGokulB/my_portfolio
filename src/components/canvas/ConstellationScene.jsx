import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = ({ color = "#a855f7", size = 0.003, opacity = 1, count = 5000, ...props }) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(count), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={color}
                    opacity={opacity}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const DataDust = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(1500), { radius: 1.0 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y += delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 3]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00d4ff" // Cyan Tech color
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Mouse Parallax Rig
const CameraRig = () => {
    useFrame((state) => {
        // Gentle parallax
        state.camera.position.lerp(
            { x: state.mouse.x / 2, y: state.mouse.y / 2, z: 1 },
            0.02
        );
        state.camera.lookAt(0, 0, 0);
    });
    return null;
};

const ConstellationScene = ({ isDark }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-700 ${isDark ? 'bg-[#030305]' : 'bg-[#ffffff]'}`}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                {isDark ? (
                    /* Dark Mode: Deep Space Constellation */
                    <>
                        <Stars />
                        <DataDust />
                        <ambientLight intensity={0.5} />
                    </>
                ) : (
                    /* Light Mode: Antigravity Minimal */
                    <>
                        <ambientLight intensity={1} />
                        {/* Ultra subtle particles for "floating" feel without clutter */}
                        <Stars count={800} color="#000000" size={0.0015} opacity={0.15} />
                    </>
                )}

                <CameraRig />
            </Canvas>

            {/* Cinematic Vignette - Dark Mode Only */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
            )}
        </div>
    );
};

export default ConstellationScene;

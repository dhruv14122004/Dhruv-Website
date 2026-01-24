import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

const RetroShape = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.6;
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#ff4d00" wireframe wireframeLinewidth={2} />
        </mesh>
    );
};

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-retro-bg flex flex-col items-center justify-center font-mono"
        >
            <div className="w-full h-[60vh]">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <Center>
                        <RetroShape />
                    </Center>
                </Canvas>
            </div>

            <div className="absolute bottom-20 text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold font-heading text-retro-text shine-effect animate-pulse">
                    INITIALIZING SYSTEM...
                </h2>

                <div className="w-64 h-2 border-2 border-retro-border mx-auto p-0.5 relative">
                    <motion.div
                        className="h-full bg-retro-accent shadow-[0_0_10px_#ff4d00]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                <div className="flex justify-between w-64 mx-auto text-xs text-retro-text-secondary font-mono">
                    <span>LOADING_ASSETS</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
            </div>

            {/* Grid Background Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[-1] bg-[length:100%_4px,3px_100%]"></div>
        </motion.div>
    );
};

export default Loader;

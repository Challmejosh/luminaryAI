"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { GripHorizontal } from "lucide-react";

function Robot({ scrollProgress }: { scrollProgress: number }) {
  const group = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Mesh>(null);
  const rightLeg = useRef<THREE.Mesh>(null);
  const leftArm = useRef<THREE.Mesh>(null);
  const rightArm = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!group.current) return;
    
    // Rotate slightly based on scroll to make it look active
    const targetRotationY = scrollProgress * Math.PI * 2;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.1);
    
    // Walking animation based on scroll progress
    // Multiply by a high number so he takes many steps during the scroll
    const walkCycle = scrollProgress * Math.PI * 40; 
    
    if (leftLeg.current && rightLeg.current && leftArm.current && rightArm.current) {
      // Legs swing back and forth
      leftLeg.current.rotation.x = Math.sin(walkCycle) * 0.6;
      rightLeg.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.6;
      
      // Arms swing opposite to legs
      leftArm.current.rotation.x = Math.sin(walkCycle + Math.PI) * 0.5;
      rightArm.current.rotation.x = Math.sin(walkCycle) * 0.5;
      
      // Bob up and down slightly with steps
      group.current.position.y = Math.sin(walkCycle * 0.5) * 0.1 - 0.5;
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 1.25, 0.26]}>
        <boxGeometry args={[0.1, 0.05, 0.05]} />
        <meshBasicMaterial color="#ec4899" />
      </mesh>
      <mesh position={[0.15, 1.25, 0.26]}>
        <boxGeometry args={[0.1, 0.05, 0.05]} />
        <meshBasicMaterial color="#ec4899" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[0.7, 1, 0.4]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Left Arm */}
      <group position={[-0.45, 0.8, 0]}>
        <mesh ref={leftArm} position={[0, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.15]} />
          <meshStandardMaterial color="#a3a3a3" />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group position={[0.45, 0.8, 0]}>
        <mesh ref={rightArm} position={[0, -0.3, 0]}>
          <boxGeometry args={[0.15, 0.7, 0.15]} />
          <meshStandardMaterial color="#a3a3a3" />
        </mesh>
      </group>
      
      {/* Left Leg */}
      <group position={[-0.2, -0.1, 0]}>
        <mesh ref={leftLeg} position={[0, -0.4, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </group>
      
      {/* Right Leg */}
      <group position={[0.2, -0.1, 0]}>
        <mesh ref={rightLeg} position={[0, -0.4, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </group>
    </group>
  );
}

export default function Scene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = window.scrollY / scrollHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      drag
      dragMomentum={false}
      onDragStart={() => setHasDragged(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed z-[100] w-[200px] h-[300px] cursor-grab active:cursor-grabbing"
      style={{ bottom: 40, right: 40 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <AnimatePresence>
        {(!hasDragged || isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 pointer-events-none"
          >
            <GripHorizontal className="w-3 h-3" />
            Drag me anywhere!
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <Robot scrollProgress={scrollProgress} />
      </Canvas>
    </motion.div>
  );
}

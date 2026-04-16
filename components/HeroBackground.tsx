"use client";

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 20 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Cyan and blue colors with lower intensity
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        colors[i3] = 0.0;     // R
        colors[i3 + 1] = 0.4; // G (cyan)
        colors[i3 + 2] = 0.6; // B
      } else {
        colors[i3] = 0.0;     // R
        colors[i3 + 1] = 0.3; // G (blue)
        colors[i3 + 2] = 0.5; // B
      }
    }
    
    return { positions, colors };
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[3, 2, -5]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={hovered ? '#00ffff' : '#0080ff'}
        emissive={hovered ? '#00ffff' : '#004080'}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 2;
      meshRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 2 - 5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, -1, -3]} scale={0.8}>
      <torusGeometry args={[0.3, 0.1, 16, 32]} />
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#800080"
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.3, max: 0.8 }}
        dpr={1}
        frameloop="demand"
      >
        <ambientLight intensity={0.05} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ff00ff" />
        
        <Stars />
        <FloatingCube />
        <FloatingTorus />
      </Canvas>
    </div>
  );
}

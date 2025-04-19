
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float, Text3D, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface IFloatingObjectProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  type: 'cube' | 'sphere' | 'cone' | 'torus' | 'book';
}

const FloatingObject: React.FC<IFloatingObjectProps> = ({ 
  position, 
  rotation = [0, 0, 0], 
  scale = 1, 
  color = '#9b87f5',
  speed = 1,
  type 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Add subtle floating motion
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.002;
    meshRef.current.rotation.x += 0.003 * speed;
    meshRef.current.rotation.y += 0.005 * speed;
  });

  let geometry;
  switch (type) {
    case 'cube':
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case 'sphere':
      geometry = <sphereGeometry args={[0.7, 32, 32]} />;
      break;
    case 'cone':
      geometry = <coneGeometry args={[0.7, 1.5, 32]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[0.7, 0.2, 16, 32]} />;
      break;
    case 'book':
      geometry = <boxGeometry args={[1.2, 0.2, 0.8]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh 
        ref={meshRef} 
        position={position} 
        rotation={rotation as [number, number, number]} 
        scale={scale}
      >
        {geometry}
        <meshStandardMaterial 
          color={color} 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
};

export const EducationScene: React.FC = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#9b87f5" />
      
      <Environment preset="city" />
      
      {/* Center piece */}
      <FloatingObject position={[0, 0, 0]} type="sphere" scale={1.2} color="#9b87f5" />
      
      {/* Floating educational objects */}
      <FloatingObject position={[-4, 2, -2]} type="cube" color="#7E69AB" speed={0.7} />
      <FloatingObject position={[4, -2, -1]} type="torus" color="#1EAEDB" speed={1.2} />
      <FloatingObject position={[3, 3, -3]} type="cone" color="#F97316" speed={0.9} />
      <FloatingObject position={[-3, -3, -2]} type="book" color="#E5DEFF" speed={0.5} />
      <FloatingObject position={[2, -4, -4]} type="cube" color="#D3E4FD" speed={0.8} />
      <FloatingObject position={[-2, 4, -3]} type="book" color="#7E69AB" speed={1.1} />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};


import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, size = 1, speed = 1 }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    
    // Animate sphere
    sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.5;
    sphereRef.current.rotation.y += 0.01 * speed;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={sphereRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5}
          roughness={0.2} 
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const CTABg = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Environment preset="city" />
      
      <AnimatedSphere position={[3, 1, -5]} color="#9b87f5" size={1.5} speed={0.8} />
      <AnimatedSphere position={[-4, -2, -10]} color="#1EAEDB" size={2} speed={0.5} />
      <AnimatedSphere position={[5, -3, -15]} color="#F97316" size={2.5} speed={0.3} />
    </Canvas>
  );
};

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <CTABg />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-xl p-12 rounded-xl border border-white/20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
            Ready to Transform Your <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Teaching & Learning
            </span>?
          </h2>
          
          <p className="text-xl text-white/80 mb-8 text-center max-w-2xl mx-auto">
            Join Professor Chad and thousands of educators in revolutionizing education with our cutting-edge EdTech platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-edtech-primary hover:bg-edtech-secondary text-white px-8 py-6 text-lg"
            >
              Sign Up as Teacher
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-edtech-dark px-8 py-6 text-lg"
            >
              Join as Student <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-white/60 text-center mt-6">
            Free trial available. No credit card required.
          </p>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-edtech-dark/80 via-edtech-dark/70 to-edtech-primary/50 z-0"></div>
    </div>
  );
};

export default CTASection;


import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { EducationScene } from '@/components/3d/ThreeCanvas';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (heroRef.current && headingRef.current && subHeadingRef.current && ctaRef.current) {
      tl.fromTo(
        headingRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <EducationScene />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              EdTech
            </span>{" "}
            <span>Platform</span>
          </h1>
          
          <p 
            ref={subHeadingRef}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
          >
            The next generation learning experience with AI-enhanced lectures, real-time interaction, and community-driven knowledge sharing.
          </p>
          
          <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-edtech-primary hover:bg-edtech-secondary text-white font-semibold px-8"
            >
              For Teachers
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-edtech-dark font-semibold px-8"
            >
              For Students
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-edtech-dark/60 to-edtech-dark z-0"></div>
    </div>
  );
};

export default HeroSection;

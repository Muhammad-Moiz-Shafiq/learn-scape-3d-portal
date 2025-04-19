
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const professorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const phrases = ["Learn.", "Connect.", "Grow."];
    let currentPhrase = 0;
    
    // Animation timeline
    const tl = gsap.timeline();

    // Animate professor avatar
    tl.fromTo(
      professorRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    
    // Headline animation
    tl.fromTo(
      headingRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    // Text typing animation
    const typeText = () => {
      gsap.to(subHeadingRef.current, {
        duration: 1.5,
        text: phrases[currentPhrase],
        ease: "none",
        onComplete: () => {
          // Pause before deleting
          gsap.delayedCall(1, () => {
            // Delete text
            gsap.to(subHeadingRef.current, {
              duration: 1,
              text: "",
              ease: "none",
              onComplete: () => {
                // Move to next phrase
                currentPhrase = (currentPhrase + 1) % phrases.length;
                // Type next phrase
                gsap.delayedCall(0.5, typeText);
              }
            });
          });
        }
      });
    };
    
    // Start typing animation
    tl.add(() => typeText(), "+=0.5");
    
    // Animate CTA
    tl.fromTo(
      ctaRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
    
    // Floating animation for professor
    gsap.to(professorRef.current, {
      y: '+=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    return () => {
      // Cleanup animations
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-edtech-primary opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-edtech-accent opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-edtech-orange opacity-20 blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h1 
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg"
            >
              The Future of <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
                Education
              </span> Is Here
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl md:text-4xl font-bold text-white">
                <div ref={subHeadingRef} className="inline h-12 min-w-[150px]"></div>
              </span>
              <span className="animate-pulse text-edtech-primary text-4xl">|</span>
            </div>
            
            <p className="text-xl text-white/80 mb-8">
              AI-powered courses, auto-transcribed videos, and real-time 
              interaction with tutors. Experience the next generation of learning.
            </p>
            
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-edtech-primary hover:bg-edtech-primary/80 text-white font-semibold px-8 py-6 text-lg"
              >
                Start Learning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-edtech-accent text-edtech-accent hover:bg-edtech-accent/10 font-semibold px-8 py-6 text-lg"
              >
                Become a Tutor
              </Button>
            </div>
          </div>
          
          {/* Right Side - Professor Avatar */}
          <div ref={professorRef} className="relative flex-1 h-[450px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* AI Professor Avatar */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glowing Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-edtech-primary to-edtech-accent opacity-30 blur-md animate-pulse-soft"></div>
                
                {/* Professor Silhouette */}
                <div className="absolute inset-0 rounded-full bg-edtech-dark flex items-center justify-center overflow-hidden border-2 border-edtech-primary/30">
                  {/* Abstract Professor Shape */}
                  <div className="w-full h-full relative">
                    {/* Head */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1/2 h-1/2 rounded-full bg-gradient-to-b from-edtech-primary/80 to-edtech-accent/80"></div>
                    {/* Body */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-1/3 rounded-t-3xl bg-gradient-to-b from-edtech-primary/60 to-edtech-accent/60"></div>
                    {/* Digital Circuit Lines */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-edtech-accent"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-edtech-accent"></div>
                      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-edtech-accent"></div>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Particles */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-edtech-primary"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-edtech-accent"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-edtech-orange"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"></div>
                </div>
                
                {/* Data Streams */}
                <div className="absolute inset-0 rotate-45">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`stream-${i}`} 
                      className="absolute top-1/2 left-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-edtech-primary to-transparent"
                      style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Glowing Bottom Text */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-edtech-dark border border-edtech-primary/30">
                <p className="text-edtech-primary text-xs sm:text-sm font-mono">AI Professor v2.25 // online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-edtech-dark/40 to-edtech-dark z-0"></div>
      
      {/* Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
    </div>
  );
};

export default HeroSection;

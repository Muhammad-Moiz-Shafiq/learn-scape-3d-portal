import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!contentRef.current || !ctaRef.current) return;

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
    
    // Pulsating glow for CTA
    gsap.to(ctaRef.current, {
      boxShadow: '0 0 20px 5px rgba(155, 135, 245, 0.5)',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-12 gap-4">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="border-l border-gray-400 h-full"></div>
            ))}
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-rows-12 gap-4">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="border-t border-gray-400 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-edtech-primary/60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 rounded-full bg-edtech-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-full bg-edtech-accent/20 blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 rounded-full bg-edtech-orange/20 blur-[80px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl p-12 rounded-xl border border-gray-200 shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">
            Start Your <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Learning Journey
            </span> Today
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Join thousands of students and educators already transforming their
            learning and teaching experience with our cutting-edge EdTech platform.
          </p>
          
          <div className="flex flex-col items-center">
            <Button 
              ref={ctaRef}
              size="lg" 
              className="bg-gradient-to-r from-edtech-primary to-edtech-accent hover:from-edtech-primary/90 hover:to-edtech-accent/90 text-white px-12 py-8 text-xl font-bold rounded-full"
            >
              <Sparkles className="mr-2 h-6 w-6" /> Start Learning Today
            </Button>
            
            <p className="text-gray-500 text-center mt-6">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
      
      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 z-0"></div>
    </div>
  );
};

export default CTASection;

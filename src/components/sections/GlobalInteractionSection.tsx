
import React, { useEffect, useRef } from 'react';
import { Globe, Users, MessageSquare } from 'lucide-react';
import gsap from 'gsap';

interface GlobeConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  duration?: number;
}

const GlobeConnection: React.FC<GlobeConnectionProps> = ({ 
  startX, startY, endX, endY, delay, duration = 3 
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (!pathRef.current) return;
    
    const length = pathRef.current.getTotalLength();
    
    // Set up initial state - path is invisible
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
    });
    
    // Animate path drawing
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: "power3.inOut",
      repeat: -1,
      repeatDelay: 5,
      onComplete: () => {
        // Flash at the end
        gsap.to(pathRef.current, {
          opacity: 0,
          duration: 0.3,
          repeat: 3,
          yoyo: true
        });
      }
    });
    
  }, [delay, duration]);

  // Generate a curved path between two points
  const curveX = (startX + endX) / 2;
  const curveY = Math.min(startY, endY) - 50;
  
  const path = `M${startX},${startY} Q${curveX},${curveY} ${endX},${endY}`;
  
  return (
    <path 
      ref={pathRef}
      d={path} 
      stroke="#9b87f5" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
    />
  );
};

const GlobalInteractionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !globeRef.current || !statsRef.current) return;
    
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(
      globeRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(
      statsRef.current.children,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Rotate globe continuously
    gsap.to(globeRef.current, {
      rotateY: 360,
      duration: 40,
      repeat: -1,
      ease: "linear"
    });
  }, []);
  
  // Connection points for the globe
  const connections = [
    { startX: 200, startY: 150, endX: 300, endY: 200, delay: 1 },
    { startX: 250, startY: 100, endX: 150, endY: 200, delay: 2.5 },
    { startX: 300, startY: 180, endX: 220, endY: 250, delay: 4 },
    { startX: 150, startY: 150, endX: 270, endY: 120, delay: 5.5 },
    { startX: 180, startY: 220, endX: 120, endY: 170, delay: 7 }
  ];

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden bg-edtech-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-edtech-accent/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Globe Visualization */}
          <div ref={globeRef} className="relative perspective-[1000px] h-[400px] mx-auto">
            {/* Globe Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] rounded-full border border-edtech-primary/30 flex items-center justify-center perspective-[1000px]">
                {/* Globe Sphere */}
                <div className="absolute w-full h-full rounded-full border-2 border-edtech-primary/20 bg-edtech-dark">
                  {/* Grid lines */}
                  <div className="absolute inset-0 rounded-full border-2 border-edtech-primary/10"></div>
                  
                  {/* Latitude lines */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={`lat-${i}`}
                      className="absolute top-1/2 left-0 right-0 h-[1px] bg-edtech-primary/10 transform -translate-y-1/2"
                      style={{ transform: `translateY(-50%) rotateX(${i * 22.5}deg)` }}
                    ></div>
                  ))}
                  
                  {/* Longitude lines */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={`long-${i}`}
                      className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-edtech-primary/10 transform -translate-x-1/2"
                      style={{ transform: `translateX(-50%) rotateY(${i * 30}deg)` }}
                    ></div>
                  ))}
                  
                  {/* Continents (simplified) */}
                  <div className="absolute w-32 h-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-edtech-primary/20"></div>
                  <div className="absolute w-40 h-16 bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 rounded-full bg-edtech-primary/20"></div>
                  <div className="absolute w-24 h-32 bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-edtech-primary/20"></div>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {connections.map((conn, i) => (
                    <GlobeConnection key={i} {...conn} />
                  ))}
                </svg>
                
                {/* Connection dots/students */}
                {connections.map((conn, i) => (
                  <React.Fragment key={`dot-${i}`}>
                    <div 
                      className="absolute w-3 h-3 rounded-full bg-edtech-accent animate-pulse"
                      style={{ top: `${conn.startY}px`, left: `${conn.startX}px` }}
                    ></div>
                    <div 
                      className="absolute w-3 h-3 rounded-full bg-edtech-primary animate-pulse"
                      style={{ top: `${conn.endY}px`, left: `${conn.endX}px` }}
                    ></div>
                  </React.Fragment>
                ))}
                
                {/* Glowing core */}
                <div className="absolute w-20 h-20 rounded-full bg-edtech-primary/30 blur-md animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div ref={titleRef} className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
                  Global Learning Community
                </span>
              </h2>
              <p className="text-xl text-white/70">
                Join thousands of students and educators from around the world. 
                Connect, collaborate, and learn together in our interactive global community.
              </p>
            </div>
            
            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-3">
                  <Users className="text-edtech-primary mr-2" />
                  <h3 className="text-xl font-semibold text-white">100K+</h3>
                </div>
                <p className="text-white/70">Active students globally</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-3">
                  <Globe className="text-edtech-accent mr-2" />
                  <h3 className="text-xl font-semibold text-white">120+</h3>
                </div>
                <p className="text-white/70">Countries represented</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-3">
                  <MessageSquare className="text-edtech-orange mr-2" />
                  <h3 className="text-xl font-semibold text-white">2M+</h3>
                </div>
                <p className="text-white/70">Messages exchanged daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalInteractionSection;

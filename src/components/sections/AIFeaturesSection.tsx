import React, { useEffect, useRef } from 'react';
import { Brain, FileText, FileSearch, MessageSquare } from 'lucide-react';
import gsap from 'gsap';

interface BrainConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  delay: number;
  duration?: number;
}

const BrainConnection: React.FC<BrainConnectionProps> = ({ 
  startX, startY, endX, endY, color, delay, duration = 3 
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
      opacity: 0.6,
      duration: duration,
      delay: delay,
      ease: "power3.inOut",
      repeat: -1,
      repeatDelay: 3,
    });
    
  }, [delay, duration]);

  // Generate a curved path between two points
  const mid1X = startX + (endX - startX) * 0.2;
  const mid1Y = startY + (endY - startY) * 0.2;
  const mid2X = startX + (endX - startX) * 0.8;
  const mid2Y = startY + (endY - startY) * 0.8;
  
  const path = `M${startX},${startY} C${mid1X},${mid1Y} ${mid2X},${mid2Y} ${endX},${endY}`;
  
  return (
    <path 
      ref={pathRef}
      d={path} 
      stroke={color} 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
    />
  );
};

const AIFeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:border-edtech-primary/50 transition-all duration-300"
    >
      <div className="mb-4 p-3 rounded-full bg-edtech-primary/20 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AIFeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !brainRef.current) return;
    
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
      brainRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: brainRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Pulsating animation for brain
    gsap.to(brainRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);
  
  // Connection points for the brain
  const connections = [
    { startX: 150, startY: 100, endX: 80, endY: 50, color: "#0078ff", delay: 0.5 },
    { startX: 150, startY: 180, endX: 80, endY: 230, color: "#0078ff", delay: 1.2 },
    { startX: 250, startY: 100, endX: 320, endY: 50, color: "#1EAEDB", delay: 1.8 },
    { startX: 250, startY: 180, endX: 320, endY: 230, color: "#1EAEDB", delay: 0.8 }
  ];
  
  const features = [
    {
      icon: <FileText className="text-edtech-primary h-6 w-6" />,
      title: "Smart Transcription",
      description: "AI automatically creates accurate transcripts of all video lectures with speaker identification.",
      index: 0
    },
    {
      icon: <FileSearch className="text-edtech-accent h-6 w-6" />,
      title: "Semantic Search",
      description: "Find exactly what you need with intelligent search that understands concepts, not just keywords.",
      index: 1
    },
    {
      icon: <MessageSquare className="text-edtech-orange h-6 w-6" />,
      title: "AI Chat Assistant",
      description: "Get instant answers to your questions about course content from our intelligent AI assistant.",
      index: 2
    },
    {
      icon: <Brain className="text-purple-400 h-6 w-6" />,
      title: "Personalized Learning",
      description: "AI analyzes your progress and recommends content tailored to your learning style and pace.",
      index: 3
    }
  ];

  return (
    <div ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-edtech-primary/10 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              AI-Powered Features
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our cutting-edge AI technology transforms how you teach and learn, 
            making education more accessible, engaging, and effective.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
          {/* AI Brain Visualization */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div ref={brainRef} className="relative w-[400px] h-[300px]">
              {/* Brain outline */}
              <svg width="400" height="300" viewBox="0 0 400 300" className="absolute inset-0">
                {/* Brain connections */}
                {connections.map((conn, i) => (
                  <BrainConnection key={i} {...conn} />
                ))}
                
                {/* Brain shape */}
                <path 
                  d="M200,50 C260,50 300,100 300,150 C300,200 260,250 200,250 C140,250 100,200 100,150 C100,100 140,50 200,50 Z
                     M200,50 C180,70 180,90 200,110 C220,90 220,70 200,50 Z
                     M200,250 C180,230 180,210 200,190 C220,210 220,230 200,250 Z
                     M100,150 C120,140 140,140 160,150 C140,160 120,160 100,150 Z
                     M300,150 C280,140 260,140 240,150 C260,160 280,160 300,150 Z"
                  stroke="#0078ff"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Neural points */}
                <circle cx="200" cy="80" r="8" fill="#0078ff" className="animate-pulse" />
                <circle cx="200" cy="220" r="8" fill="#1EAEDB" className="animate-pulse" />
                <circle cx="130" cy="150" r="8" fill="#F97316" className="animate-pulse" />
                <circle cx="270" cy="150" r="8" fill="#0078ff" className="animate-pulse" />
                <circle cx="180" cy="120" r="6" fill="#1EAEDB" className="animate-pulse" />
                <circle cx="220" cy="120" r="6" fill="#F97316" className="animate-pulse" />
                <circle cx="180" cy="180" r="6" fill="#0078ff" className="animate-pulse" />
                <circle cx="220" cy="180" r="6" fill="#1EAEDB" className="animate-pulse" />
              </svg>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-edtech-primary/20 blur-2xl animate-pulse"></div>
              </div>
              
              {/* Data particles */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => {
                  const size = Math.random() * 4 + 2;
                  const x = Math.random() * 400;
                  const y = Math.random() * 300;
                  const delay = Math.random() * 5;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute rounded-full bg-edtech-primary animate-pulse"
                      style={{ 
                        width: `${size}px`, 
                        height: `${size}px`, 
                        left: `${x}px`, 
                        top: `${y}px`,
                        animationDelay: `${delay}s`,
                        opacity: Math.random() * 0.5 + 0.3
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Features Content */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AIFeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeaturesSection;

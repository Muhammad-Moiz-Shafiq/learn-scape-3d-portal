import React, { useEffect, useRef } from 'react';
import { Upload, FileAudio, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, color, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          y: 50, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className={`relative p-6 md:p-8 rounded-xl backdrop-blur-lg border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-white`}
    >
      <div className={`mb-6 p-4 rounded-full bg-gradient-to-br from-${color}/20 to-${color}/10 inline-block`}>
        <div className="text-3xl">{icon}</div>
      </div>
      <h3 className={`text-2xl font-bold mb-4 text-gray-800`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {/* Connection Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>
      )}
      
      {/* Step Number */}
      <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-${color} text-white flex items-center justify-center font-bold`}>
        {index + 1}
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
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
    }
  }, []);

  const steps = [
    {
      icon: <Upload className="text-edtech-primary" size={32} />,
      title: "Upload Courses",
      description: "Educators upload video lectures and course materials through our intuitive dashboard.",
      color: "edtech-primary"
    },
    {
      icon: <FileAudio className="text-edtech-accent" size={32} />,
      title: "AI Transcription",
      description: "Our advanced AI automatically transcribes videos, making content searchable and accessible.",
      color: "edtech-accent"
    },
    {
      icon: <MessageCircle className="text-edtech-orange" size={32} />,
      title: "Real-time Chat",
      description: "Students connect with tutors and peers through live chat for immediate assistance.",
      color: "edtech-orange"
    }
  ];

  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/50 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-edtech-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-edtech-accent/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our seamless three-step process transforms traditional education into an interactive, 
            AI-enhanced learning experience.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

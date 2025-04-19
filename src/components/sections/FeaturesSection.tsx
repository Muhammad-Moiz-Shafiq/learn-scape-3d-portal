
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Video, Users, Bot } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
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
        delay: delay * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  }, [delay]);

  return (
    <Card 
      ref={cardRef}
      className="p-6 border-2 border-edtech-primary/20 hover:border-edtech-primary transition-all duration-300 bg-white/10 backdrop-blur-lg hover:shadow-lg hover:shadow-edtech-primary/20 hover:-translate-y-2 cursor-pointer group"
    >
      <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-edtech-primary/20 to-edtech-accent/20 inline-block text-edtech-primary group-hover:text-edtech-accent transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-edtech-primary transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subHeadingRef.current) return;

    gsap.fromTo(
      [headingRef.current, subHeadingRef.current],
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

  const features = [
    {
      title: "Expert-Led Courses",
      description: "Learn from university professors and industry experts in an engaging, interactive format.",
      icon: <GraduationCap size={28} />,
      delay: 0,
    },
    {
      title: "AI-Enhanced Videos",
      description: "Smart transcripts, timestamps, and search features help you find exactly what you need.",
      icon: <Bot size={28} />,
      delay: 1,
    },
    {
      title: "Community Learning",
      description: "Join live discussions, study groups, and peer-to-peer learning opportunities.",
      icon: <Users size={28} />,
      delay: 2,
    },
    {
      title: "Interactive Lectures",
      description: "Engage with content through polls, quizzes, and real-time collaboration tools.",
      icon: <Video size={28} />,
      delay: 3,
    },
  ];

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-edtech-light to-white dark:from-edtech-dark dark:to-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Transform
            </span> Your Learning Experience
          </h2>
          <p ref={subHeadingRef} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven educational methods to create an immersive, effective learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

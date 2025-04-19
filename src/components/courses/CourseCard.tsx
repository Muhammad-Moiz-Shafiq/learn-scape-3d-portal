
import React, { useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Star, ArrowRight } from 'lucide-react';
import { Course } from '@/types/course';
import gsap from 'gsap';

interface CourseCardProps extends Course {}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, instructor, image, students, duration, rating, tags, bgColor, index 
}) => {
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
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className="overflow-hidden bg-white/5 backdrop-blur-lg border-white/10 hover:border-edtech-primary/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={`absolute inset-0 ${bgColor} opacity-70`}></div>
        
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4">by {instructor}</p>
        
        <div className="flex justify-between text-sm text-white/70 mb-4">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-400 fill-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-edtech-primary hover:bg-edtech-primary/80"
        >
          View Course <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;

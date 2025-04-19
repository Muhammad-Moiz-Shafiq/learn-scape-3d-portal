
import React, { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Star, Award, Trophy, Medal, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import gsap from 'gsap';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  achievement: keyof typeof achievements;
}

const achievements = {
  fastLearner: {
    icon: Star,
    label: "Fast Learner",
    color: "text-yellow-400"
  },
  topStudent: {
    icon: Trophy,
    label: "Top Student",
    color: "text-amber-400"
  },
  excellence: {
    icon: Award,
    label: "Excellence",
    color: "text-purple-400"
  },
  master: {
    icon: Medal,
    label: "Master",
    color: "text-blue-400"
  }
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  rating,
  achievement
}) => {
  const Achievement = achievements[achievement].icon;
  
  return (
    <Card className="relative h-full p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-edtech-primary/50 transition-all duration-300">
      <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-edtech-dark/80 border border-white/10 flex items-center justify-center">
        <Achievement className={`w-6 h-6 ${achievements[achievement].color}`} />
      </div>
      
      <Quote className="w-8 h-8 mb-4 text-edtech-primary/50" />
      
      <p className="text-white/90 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <Avatar className="h-12 w-12 border-2 border-edtech-primary/20">
          <img src={avatar} alt={author} className="object-cover" />
        </Avatar>
        
        <div className="ml-4">
          <h4 className="font-medium text-white">{author}</h4>
          <p className="text-sm text-white/60">{role}</p>
        </div>
        
        <div className="ml-auto flex items-center">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (!titleRef.current || !testimonialsRef.current) return;
    
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
      testimonialsRef.current.children,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const testimonials = [
    {
      quote: "The AI-enhanced video transcription makes finding key concepts a breeze. This platform is revolutionizing how we learn!",
      author: "Sarah Johnson",
      role: "Computer Science Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      achievement: "fastLearner"
    },
    {
      quote: "Being able to chat with tutors in real-time has drastically improved my understanding of complex topics.",
      author: "Michael Chen",
      role: "Engineering Major",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      achievement: "topStudent"
    },
    {
      quote: "The platform's AI features help me create more engaging content for my students. It's a game-changer!",
      author: "Dr. Emily Rodriguez",
      role: "Professor of Mathematics",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5,
      achievement: "excellence"
    },
    {
      quote: "The interactive learning environment and AI assistance have transformed my teaching experience.",
      author: "Prof. David Kim",
      role: "Physics Educator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      achievement: "master"
    }
  ] as const;

  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-br from-edtech-dark to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-edtech-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-edtech-accent/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Learners
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              {" "}Love Us
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of satisfied students and educators who are transforming 
            their learning experience with our AI-powered platform.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div ref={testimonialsRef} className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="px-4"
                  onFocus={() => setActiveIndex(index)}
                >
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-4">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </div>
        
        {/* Progress Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-edtech-primary' : 'bg-white/20'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;


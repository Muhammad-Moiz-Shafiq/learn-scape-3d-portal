import React, { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Star, Award, Trophy, Medal, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  level: number;
  badge: React.ReactNode;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, author, role, avatar, level, badge, index 
}) => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!testimonialRef.current) return;
    
    gsap.fromTo(
      testimonialRef.current,
      { 
        opacity: 0,
        scale: 0.9,
        rotateY: index % 2 === 0 ? -15 : 15
      },
      { 
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  }, [index]);

  return (
    <Card 
      ref={testimonialRef}
      className={`p-8 transition-all duration-500 cursor-pointer relative overflow-hidden
        bg-gradient-to-br from-edtech-dark to-black border-white/5
        hover:border-edtech-primary/30 hover:shadow-lg hover:shadow-edtech-primary/10
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-edtech-primary/10 via-transparent to-edtech-accent/10 opacity-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : ''}`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="text-edtech-primary mr-2">
              {badge}
            </div>
            <div className="px-3 py-1 bg-edtech-primary/20 text-edtech-primary rounded-full text-xs">
              Level {level} Learner
            </div>
          </div>
          <div className="text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < 5 ? "fill-yellow-400 inline-block" : "inline-block"} />
            ))}
          </div>
        </div>
        
        <Quote className="text-edtech-primary/20 absolute top-4 right-4 h-16 w-16" />
        
        <p className="text-white/80 mb-8 relative z-10 text-lg">"{quote}"</p>
        
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edtech-primary to-edtech-accent flex items-center justify-center overflow-hidden">
              {avatar ? (
                <img src={avatar} alt={author} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl font-bold text-white">{author.charAt(0)}</span>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">{author}</h4>
            <p className="text-sm text-white/60">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!headingRef.current || !subHeadingRef.current || !carouselRef.current) return;

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

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const testimonials = [
    {
      quote: "The AI-enhanced video transcription makes finding key concepts a breeze. This platform is revolutionizing how we learn!",
      author: "Dr. Sarah Johnson",
      role: "Professor of Computer Science",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      level: 5,
      badge: <Trophy className="h-5 w-5 text-yellow-400" />
    },
    {
      quote: "Real-time chat with tutors has transformed my learning experience. I get instant help whenever I need it.",
      author: "Michael Chen",
      role: "Graduate Student",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      level: 3,
      badge: <Award className="h-5 w-5 text-edtech-accent" />
    },
    {
      quote: "The global learning community and interactive features make teaching more engaging than ever before.",
      author: "Prof. James Wilson",
      role: "Visiting Lecturer",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      level: 4,
      badge: <Medal className="h-5 w-5 text-edtech-primary" />
    },
    {
      quote: "I've tried many educational platforms, but EdTech truly stands out with its community-driven approach and cutting-edge technology.",
      author: "Emma Rodriguez",
      role: "High School Teacher",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      level: 5,
      badge: <Trophy className="h-5 w-5" />
    },
    {
      quote: "The AI transcription and search capabilities save me hours of time. I can quickly find the exact concepts I need to review.",
      author: "David Kim",
      role: "Engineering Student",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
      level: 2,
      badge: <Award className="h-5 w-5" />
    },
    {
      quote: "As an adjunct professor at multiple universities, EdTech has become my central hub for all my courses. It's streamlined my teaching tremendously.",
      author: "Dr. Priya Patel",
      role: "Adjunct Professor",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      level: 4,
      badge: <Medal className="h-5 w-5" />
    }
  ];

  return (
    <div ref={sectionRef} className="py-24 bg-gradient-to-br from-edtech-dark/80 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-edtech-primary/10 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-edtech-accent/10 blur-[100px] rounded-full animate-pulse"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-l border-edtech-primary/30 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-t border-edtech-primary/30 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Learning Heroes
            </span>
          </h2>
          <p ref={subHeadingRef} className="text-xl text-white/70 max-w-3xl mx-auto">
            Join our community of educators and students who are already transforming how they teach and learn.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <Trophy className="text-yellow-400 mr-2" />
            <h3 className="text-white text-xl font-bold">Top Testimonials</h3>
          </div>
          <div className="bg-edtech-primary/20 px-4 py-1 rounded-full">
            <span className="text-edtech-primary text-sm font-medium">{testimonials.length} Success Stories</span>
          </div>
        </div>

        <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px] hidden md:grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              level={testimonial.level}
              badge={testimonial.badge}
              index={index}
            />
          ))}
        </div>
        
        <div className="md:hidden">
          <Carousel 
            className="w-full"
            onSelect={handleSlideChange}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Testimonial
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      avatar={testimonial.avatar}
                      level={testimonial.level}
                      badge={testimonial.badge}
                      index={index}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-8">
              <CarouselPrevious className="bg-edtech-primary/20 hover:bg-edtech-primary/40 border-edtech-primary/50" />
              <CarouselNext className="bg-edtech-primary/20 hover:bg-edtech-primary/40 border-edtech-primary/50" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-edtech-primary scale-125' : 'bg-white/20'
                }`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-edtech-primary hover:bg-edtech-primary/80 text-white font-semibold px-8 py-6 text-lg"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

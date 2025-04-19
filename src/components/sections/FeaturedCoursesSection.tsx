
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card";
import { Users, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import gsap from 'gsap';

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  students: number;
  duration: string;
  rating: number;
  tags: string[];
  bgColor: string;
  index: number;
}

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
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={`absolute inset-0 ${bgColor} opacity-70`}></div>
        
        {/* Course Tags */}
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
      
      {/* Course Content */}
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

const FeaturedCoursesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
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
  }, []);

  const courses = [
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      students: 5240,
      duration: "12h 30m",
      rating: 4.9,
      tags: ["AI", "Data Science", "Python"],
      bgColor: "bg-gradient-to-br from-edtech-primary/80 to-edtech-accent/80",
      index: 0,
    },
    {
      title: "Web Development Masterclass",
      instructor: "Michael Chen",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
      students: 8350,
      duration: "24h 45m",
      rating: 4.7,
      tags: ["JavaScript", "React", "Node.js"],
      bgColor: "bg-gradient-to-br from-blue-500/80 to-edtech-primary/80",
      index: 1,
    },
    {
      title: "UX/UI Design Principles",
      instructor: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      students: 4120,
      duration: "18h 15m",
      rating: 4.8,
      tags: ["Design", "Figma", "User Research"],
      bgColor: "bg-gradient-to-br from-edtech-accent/80 to-pink-500/80",
      index: 2,
    },
    {
      title: "Data Analysis with Python",
      instructor: "Dr. David Kim",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      students: 6780,
      duration: "15h 20m",
      rating: 4.6,
      tags: ["Python", "Data Science", "Statistics"],
      bgColor: "bg-gradient-to-br from-green-500/80 to-edtech-primary/80",
      index: 3,
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      students: 3950,
      duration: "10h 45m",
      rating: 4.5,
      tags: ["Marketing", "SEO", "Social Media"],
      bgColor: "bg-gradient-to-br from-orange-500/80 to-edtech-accent/80",
      index: 4,
    },
    {
      title: "Blockchain Development",
      instructor: "James Wilson",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
      students: 2840,
      duration: "20h 30m",
      rating: 4.8,
      tags: ["Blockchain", "Crypto", "Smart Contracts"],
      bgColor: "bg-gradient-to-br from-purple-600/80 to-blue-500/80",
      index: 5,
    }
  ];

  return (
    <div ref={sectionRef} className="py-24 relative overflow-hidden bg-edtech-dark">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/50 to-transparent"></div>
      
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-edtech-accent/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Featured Courses
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our most popular courses taught by world-class educators and unlock 
            your potential with cutting-edge content.
          </p>
        </div>
        
        {/* Featured Courses Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-4">
                  <CourseCard {...course} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-4">
              <CarouselPrevious className="position-static" />
              <CarouselNext className="position-static" />
            </div>
          </Carousel>
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            variant="outline" 
            className="border-edtech-primary/70 text-edtech-primary hover:bg-edtech-primary/10 font-semibold"
          >
            View All Courses <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoursesSection;

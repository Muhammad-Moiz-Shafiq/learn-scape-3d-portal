
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from '@/components/courses/CourseCard';
import { featuredCourses } from '@/data/courses';
import gsap from 'gsap';

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
          {featuredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.index} {...course} />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredCourses.map((course) => (
                <CarouselItem key={course.index} className="pl-4">
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

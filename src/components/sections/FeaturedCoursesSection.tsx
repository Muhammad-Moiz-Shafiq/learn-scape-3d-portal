
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { featuredCourses } from '@/data/courses';
import SectionTitle from './featured-courses/SectionTitle';
import CourseGrid from './featured-courses/CourseGrid';
import MobileCarousel from './featured-courses/MobileCarousel';
import ViewAllButton from './featured-courses/ViewAllButton';

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
        <div ref={titleRef}>
          <SectionTitle />
        </div>
        
        <CourseGrid courses={featuredCourses} />
        <MobileCarousel courses={featuredCourses} />
        <ViewAllButton />
      </div>
    </div>
  );
};

export default FeaturedCoursesSection;

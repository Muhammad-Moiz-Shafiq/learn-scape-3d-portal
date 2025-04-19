
import React from 'react';
import { Course } from '@/types/course';
import CourseCard from '@/components/courses/CourseCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MobileCarouselProps {
  courses: Course[];
}

const MobileCarousel = ({ courses }: MobileCarouselProps) => {
  return (
    <div className="md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {courses.map((course) => (
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
  );
};

export default MobileCarousel;

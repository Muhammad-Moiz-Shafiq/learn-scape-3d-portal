
import React from 'react';
import CourseCard from '@/components/courses/CourseCard';
import { Course } from '@/types/course';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.slice(0, 6).map((course) => (
        <CourseCard key={course.index} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;

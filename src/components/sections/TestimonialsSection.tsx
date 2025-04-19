
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import gsap from 'gsap';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, index }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

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
      className={`p-6 transition-all duration-500 hover:shadow-lg relative overflow-hidden
        ${index % 3 === 0 ? 'bg-gradient-to-br from-edtech-primary/10 to-edtech-accent/10 border-edtech-primary/20' : 
          index % 3 === 1 ? 'bg-gradient-to-br from-edtech-secondary/10 to-edtech-primary/10 border-edtech-secondary/20' :
          'bg-gradient-to-br from-edtech-accent/10 to-edtech-blue/10 border-edtech-accent/20'
        }
      `}
    >
      <Quote className="text-edtech-primary/30 absolute top-4 right-4" size={64} />
      <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-edtech-primary to-edtech-accent flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
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

    // Add a perspective effect to the carousel
    gsap.set(carouselRef.current, { perspective: 1000 });
  }, []);

  const testimonials = [
    {
      quote: "EdTech has revolutionized how I teach my courses. The AI-enhanced videos allow my students to find exactly what they need, when they need it.",
      author: "Dr. Sarah Johnson",
      role: "Professor of Computer Science"
    },
    {
      quote: "As a student juggling work and studies, EdTech gives me the flexibility to learn at my own pace with resources that are actually engaging and interactive.",
      author: "Michael Chen",
      role: "Graduate Student"
    },
    {
      quote: "The real-time interaction features have transformed my online teaching experience. It feels like we're all in the same room, even from across the globe.",
      author: "Prof. James Wilson",
      role: "Visiting Lecturer"
    },
    {
      quote: "I've tried many educational platforms, but EdTech truly stands out with its community-driven approach and cutting-edge technology.",
      author: "Emma Rodriguez",
      role: "High School Teacher"
    },
    {
      quote: "The AI transcription and search capabilities save me hours of time. I can quickly find the exact concepts I need to review.",
      author: "David Kim",
      role: "Engineering Student"
    },
    {
      quote: "As an adjunct professor at multiple universities, EdTech has become my central hub for all my courses. It's streamlined my teaching tremendously.",
      author: "Dr. Priya Patel",
      role: "Adjunct Professor"
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-edtech-light dark:from-black dark:to-edtech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Educators & Students
            </span>
          </h2>
          <p ref={subHeadingRef} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of educators and students who are already transforming their teaching and learning experience.
          </p>
        </div>

        <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

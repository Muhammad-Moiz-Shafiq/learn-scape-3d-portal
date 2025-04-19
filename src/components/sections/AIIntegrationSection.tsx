
import React, { useEffect, useRef } from 'react';
import { Bot, Search, Video, FileText } from 'lucide-react';
import gsap from 'gsap';

const AIIntegrationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !contentRef.current || !imageRef.current) return;

    gsap.fromTo(
      headingRef.current,
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
      contentRef.current.children,
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      imageRef.current,
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-edtech-dark to-black">
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef} 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
            AI-Powered
          </span> Learning Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-10">
            <div className="flex">
              <div className="mr-6 bg-edtech-primary/20 p-4 rounded-2xl">
                <Video className="h-8 w-8 text-edtech-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Smart Video Processing</h3>
                <p className="text-gray-300">
                  Our AI automatically chapters videos, creates timestamps, and highlights key concepts to make navigation seamless.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6 bg-edtech-primary/20 p-4 rounded-2xl">
                <FileText className="h-8 w-8 text-edtech-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Automated Transcripts</h3>
                <p className="text-gray-300">
                  Get accurate transcripts for every lecture with speaker identification and terminology correction specific to your field.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6 bg-edtech-primary/20 p-4 rounded-2xl">
                <Search className="h-8 w-8 text-edtech-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Smart Search</h3>
                <p className="text-gray-300">
                  Find exactly what you need with semantic search that understands concepts, not just keywords.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6 bg-edtech-primary/20 p-4 rounded-2xl">
                <Bot className="h-8 w-8 text-edtech-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">AI Teaching Assistant</h3>
                <p className="text-gray-300">
                  Students can ask questions and get immediate answers based on course content, reducing the burden on teachers.
                </p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-edtech-primary/20 to-edtech-accent/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
            
            {/* AI Interface Mockup */}
            <div className="absolute inset-x-8 top-8 bottom-8 bg-black/80 rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <div className="bg-edtech-dark p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="h-6 w-6 text-edtech-primary mr-2" />
                  <span className="font-medium text-white">AI Learning Assistant</span>
                </div>
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="bg-edtech-primary/10 p-4 rounded-xl">
                  <p className="text-gray-300">Can you explain the concept of neural networks?</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-white mb-3">
                    Neural networks are computing systems inspired by the biological neural networks in human brains. They consist of:
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1">
                    <li>Input layer for receiving data</li>
                    <li>Hidden layers for processing</li>
                    <li>Output layer for results</li>
                  </ul>
                  <p className="text-white mt-3">
                    Each connection has a weight that adjusts during learning. This is covered in Week 3 of the course.
                  </p>
                  <div className="mt-2 text-sm text-edtech-primary">
                    Source: Advanced ML Concepts, Lecture 5, 32:15
                  </div>
                </div>
                
                <div className="bg-edtech-primary/10 p-4 rounded-xl">
                  <p className="text-gray-300">Can you show me a simple example?</p>
                </div>
                
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="h-2 w-2 bg-edtech-primary rounded-full"></div>
                  <div className="h-2 w-2 bg-edtech-primary rounded-full"></div>
                  <div className="h-2 w-2 bg-edtech-primary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-edtech-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-edtech-accent/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationSection;

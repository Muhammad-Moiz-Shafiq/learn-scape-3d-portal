
import React, { useEffect, useRef } from 'react';
import { DollarSign, TrendingUp, Users, Star } from 'lucide-react';
import gsap from 'gsap';

const TutorDashboardSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !dashboardRef.current || !statsRef.current) return;
    
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
      dashboardRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(
      statsRef.current.children,
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        delay: 0.6,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-gradient-to-b from-edtech-dark to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/30 to-transparent"></div>
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-edtech-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Tutor Dashboard
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A powerful platform for educators to manage courses, track performance, 
            and maximize earnings with our fair revenue-sharing model.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left Column - Stats */}
          <div ref={statsRef} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Monthly Earnings</h3>
                <DollarSign className="text-edtech-primary" size={20} />
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">$2,450</span>
                <span className="ml-2 text-green-400 flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  12%
                </span>
              </div>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-edtech-primary to-edtech-accent w-3/4 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm text-white/60">75% of monthly goal</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Active Students</h3>
                <Users className="text-edtech-accent" size={20} />
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">847</span>
                <span className="ml-2 text-green-400 flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  23%
                </span>
              </div>
              <div className="mt-4 flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-edtech-primary/80 to-edtech-accent/80 border border-black flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">+42</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Rating</h3>
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
              </div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">4.9</span>
                <span className="ml-2 text-white/60">/5.0</span>
              </div>
              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"} mr-1`} 
                    size={18} 
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-white/60">Based on 120 reviews</p>
            </div>
          </div>
          
          {/* Main Dashboard Preview */}
          <div className="lg:col-span-2">
            <div ref={dashboardRef} className="relative">
              {/* Dashboard Frame */}
              <div className="bg-edtech-dark/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg p-4 overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-edtech-primary to-edtech-accent flex items-center justify-center">
                      <span className="font-bold text-white">P</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-white">Professor Dashboard</h3>
                      <p className="text-sm text-white/60">Welcome back, Prof. Alex</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Left Panel - Navigation */}
                  <div className="md:w-1/4 bg-black/20 rounded-xl p-4">
                    <nav className="space-y-2">
                      {['Dashboard', 'Courses', 'Students', 'Analytics', 'Earnings', 'Settings'].map((item, i) => (
                        <div 
                          key={i}
                          className={`p-2 rounded-lg cursor-pointer transition-colors ${
                            i === 0 ? 'bg-gradient-to-r from-edtech-primary/20 to-edtech-accent/20 text-white' : 'text-white/60 hover:bg-white/5'
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Right Panel - Content */}
                  <div className="md:w-3/4 bg-black/20 rounded-xl p-4">
                    <h3 className="text-lg font-medium text-white mb-4">Course Performance</h3>
                    
                    {/* Chart Mockup */}
                    <div className="h-48 mb-8">
                      <div className="relative h-full">
                        {/* Chart Bars */}
                        <div className="absolute inset-x-0 bottom-0 flex justify-between items-end h-3/4">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div 
                              key={i}
                              className="w-8 rounded-t-md bg-gradient-to-t from-edtech-primary/70 to-edtech-accent/70"
                              style={{ 
                                height: `${40 + Math.sin(i / 2) * 30}%`,
                                opacity: 0.5 + Math.sin(i / 2) * 0.5 
                              }}
                            ></div>
                          ))}
                        </div>
                        
                        {/* X-Axis */}
                        <div className="absolute inset-x-0 bottom-0 h-px bg-white/20"></div>
                        
                        {/* Y-Axis */}
                        <div className="absolute inset-y-0 left-0 w-px bg-white/20"></div>
                      </div>
                    </div>
                    
                    {/* Table Mockup */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-white/50 pb-1 border-b border-white/10">
                        <span>Course</span>
                        <span>Revenue</span>
                      </div>
                      
                      {['Advanced AI', 'Frontend Dev', 'Data Science', 'UX Design'].map((course, i) => (
                        <div key={i} className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-white">{course}</span>
                          <span className="text-white">${(1000 - i * 220).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-edtech-primary to-edtech-accent opacity-20 blur-sm rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboardSection;


import React, { useEffect, useRef } from 'react';
import { CreditCard, Coins, ShieldCheck, Lock } from 'lucide-react';
import gsap from 'gsap';

const PaymentFlowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!titleRef.current || !coinRef.current || !cardRef.current || !portalRef.current || !stepsRef.current) return;
    
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
      stepsRef.current.children,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Animate card
    gsap.fromTo(
      cardRef.current,
      { y: -50, opacity: 0, rotationX: 45 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1,
        delay: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: portalRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Animate coin
    const coinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: portalRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none none"
      },
      repeat: -1,
      repeatDelay: 3
    });
    
    coinTimeline.fromTo(
      coinRef.current,
      { y: -150, opacity: 0, scale: 0.5, rotation: -45 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotation: 45,
        duration: 1.5,
        delay: 2,
        ease: "bounce.out"
      }
    ).to(
      coinRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        delay: 0.3,
        ease: "power1.in",
        onComplete: () => {
          gsap.set(coinRef.current, { y: -150 });
        }
      }
    );
    
    // Portal glow effect
    gsap.to(portalRef.current, {
      boxShadow: "0 0 30px 5px rgba(155, 135, 245, 0.5)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-edtech-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edtech-primary/50 to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-edtech-accent/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              Seamless Payment Process
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Quick, secure, and hassle-free payment options that give you instant 
            access to premium courses and features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Payment Animation */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center h-[400px]">
            {/* Payment Portal */}
            <div ref={portalRef} className="relative w-64 h-64 rounded-full bg-gradient-to-br from-edtech-primary/30 to-edtech-accent/30 border border-white/10 flex items-center justify-center overflow-hidden perspective-[1000px]">
              {/* Inner Portal Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-edtech-primary/20 blur-xl animate-pulse"></div>
              </div>
              
              {/* Portal Rings */}
              <div className="absolute w-full h-full rounded-full border-2 border-edtech-primary/30 animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute w-3/4 h-3/4 rounded-full border border-edtech-accent/40 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
              <div className="absolute w-1/2 h-1/2 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '5s' }}></div>
              
              {/* Access Text */}
              <div className="absolute inset-x-0 bottom-8 text-center">
                <p className="text-white/80 text-sm font-mono">ACCESS GRANTED</p>
              </div>
              
              {/* Course Content (At the bottom of the portal) */}
              <div className="absolute bottom-0 left-0 right-0 h-16 flex justify-center items-center bg-black/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-edtech-accent/30 rounded-md mr-2"></div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold">Premium Course</span>
                  <span className="text-white/60 text-xs">Unlocked</span>
                </div>
              </div>
            </div>
            
            {/* Credit Card */}
            <div 
              ref={cardRef}
              className="absolute top-12 w-72 h-44 rounded-xl bg-gradient-to-br from-edtech-dark/80 to-black/80 border border-white/10 backdrop-blur-lg shadow-xl p-4 perspective-[1000px] transform-gpu"
            >
              {/* Card Chip */}
              <div className="w-10 h-8 bg-edtech-primary/50 rounded-md mb-4"></div>
              
              {/* Card Number */}
              <div className="flex justify-between mb-4">
                <div className="w-12 h-2 bg-white/50 rounded-full"></div>
                <div className="w-12 h-2 bg-white/50 rounded-full"></div>
                <div className="w-12 h-2 bg-white/50 rounded-full"></div>
                <div className="w-12 h-2 bg-white/50 rounded-full"></div>
              </div>
              
              {/* Card Details */}
              <div className="flex justify-between items-end mt-8">
                <div>
                  <div className="text-xs text-white/60 mb-1">CARDHOLDER</div>
                  <div className="w-20 h-2 bg-white/50 rounded-full"></div>
                </div>
                <div>
                  <div className="text-xs text-white/60 mb-1">EXPIRES</div>
                  <div className="w-10 h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
              
              {/* Card Network Logo */}
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 rounded-full bg-edtech-accent/30 flex items-center justify-center">
                  <Lock size={16} className="text-white" />
                </div>
              </div>
              
              {/* Hologram */}
              <div className="absolute bottom-4 right-4 w-12 h-8 bg-gradient-to-r from-edtech-primary/30 to-edtech-accent/30 rounded-md" 
                   style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)' }}>
              </div>
            </div>
            
            {/* Coin */}
            <div 
              ref={coinRef}
              className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center overflow-hidden perspective-[1000px]"
            >
              {/* Coin Edge */}
              <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-full"></div>
              
              {/* Dollar Sign */}
              <span className="text-2xl font-bold text-white">$</span>
              
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 opacity-50" 
                style={{ 
                  backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 2s infinite linear'
                }}
              ></div>
            </div>
          </div>
          
          {/* Payment Steps */}
          <div ref={stepsRef} className="order-1 lg:order-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex">
              <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-edtech-primary/20 to-edtech-primary/10">
                <CreditCard className="text-edtech-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Choose Your Plan</h3>
                <p className="text-white/70">Select from flexible subscription options or pay per course. Find the perfect plan for your learning journey.</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex">
              <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-edtech-accent/20 to-edtech-accent/10">
                <Lock className="text-edtech-accent h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Secure Checkout</h3>
                <p className="text-white/70">Our encrypted payment system ensures your financial information stays protected.</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex">
              <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-edtech-orange/20 to-edtech-orange/10">
                <Coins className="text-edtech-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Instant Access</h3>
                <p className="text-white/70">Gain immediate access to all course materials as soon as your payment is processed.</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex">
              <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10">
                <ShieldCheck className="text-green-500 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Satisfaction Guarantee</h3>
                <p className="text-white/70">Not satisfied? Our 30-day money-back guarantee ensures a risk-free learning experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlowSection;

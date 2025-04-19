import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import GlobalInteractionSection from '@/components/sections/GlobalInteractionSection';
import TutorDashboardSection from '@/components/sections/TutorDashboardSection';
import FeaturedCoursesSection from '@/components/sections/FeaturedCoursesSection';
import AIFeaturesSection from '@/components/sections/AIFeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PaymentFlowSection from '@/components/sections/PaymentFlowSection';
import CTASection from '@/components/sections/CTASection';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "EdTech Platform - Next-Gen Learning with AI";
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="global-interaction">
          <GlobalInteractionSection />
        </section>
        
        <section id="tutor-dashboard">
          <TutorDashboardSection />
        </section>
        
        <section id="featured-courses">
          <FeaturedCoursesSection />
        </section>
        
        <section id="ai-features">
          <AIFeaturesSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="payment-flow">
          <PaymentFlowSection />
        </section>
        
        <section id="cta">
          <CTASection />
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import AIIntegrationSection from '@/components/sections/AIIntegrationSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "EdTech Platform - Next-Gen Learning with AI";
  }, []);
  
  return (
    <div className="min-h-screen bg-edtech-dark">
      <Header />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="ai-integration">
          <AIIntegrationSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
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

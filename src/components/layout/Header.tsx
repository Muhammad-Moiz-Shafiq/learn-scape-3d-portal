import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 dark:bg-black/30 backdrop-blur-lg border-b border-gray-200' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
              EdTech
            </span>
          </a>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              <a href="#ai-features" className="text-gray-800 hover:text-edtech-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-800 hover:text-edtech-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-800 hover:text-edtech-primary transition-colors">Testimonials</a>
              <a href="#course" className="text-gray-800 hover:text-edtech-primary transition-colors">Courses</a>
              <Button className="bg-edtech-primary hover:bg-edtech-secondary text-white ml-4">Get Started</Button>
            </nav>
          )}
          
          {/* Mobile Menu Toggle */}
          {isMobile && (
            <Button 
              variant="ghost" 
              className="text-gray-800 p-1" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="mt-4 py-4 border-t border-gray-200 flex flex-col space-y-4">
            <a href="#features" className="text-gray-800 hover:text-edtech-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-800 hover:text-edtech-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-800 hover:text-edtech-primary transition-colors">Testimonials</a>
            
            <Button className="bg-edtech-primary hover:bg-edtech-secondary text-white w-full">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

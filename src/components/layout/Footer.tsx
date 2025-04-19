import React from 'react';
import { Github, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-edtech-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-4">
            <a href="#" className="inline-block mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-edtech-primary to-edtech-accent text-transparent bg-clip-text">
                EdTech
              </span>
            </a>
            <p className="text-gray-400 mb-4">
              Transforming education through technology and community-driven learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Empty space */}
          <div className="hidden md:block md:col-span-2"></div>
          
          {/* Links */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-edtech-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-edtech-primary transition-colors">How it works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-edtech-primary transition-colors">Testimonials</a></li>
              <li><a href="#ai-features" className="text-gray-400 hover:text-edtech-primary transition-colors">AI features</a></li>
            </ul>
          </div>
          
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>contact@edtech-platform.com</span>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EdTech Platform. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-edtech-primary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

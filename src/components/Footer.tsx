import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Code2 className="h-8 w-8 text-blue-400" />
          <span className="ml-2 text-xl font-bold text-white">Jobthon</span>
        </div>
        
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#home" className="text-base text-gray-400 hover:text-white">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#about" className="text-base text-gray-400 hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#testimonials" className="text-base text-gray-400 hover:text-white">
              Testimonials
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#process" className="text-base text-gray-400 hover:text-white">
              Process
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#faq" className="text-base text-gray-400 hover:text-white">
              FAQ
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#contact" className="text-base text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Jobthon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
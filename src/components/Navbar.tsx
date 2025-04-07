import React from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Jobthon</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600">Process</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Process</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
              <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
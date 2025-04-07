import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-primary to-primary-light min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Code2 className="h-16 w-16 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">Ace Your Interviews / OA</span>
            <span className="block text-primary-lightest">Here At Jobthon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 max-w-md mx-auto text-base text-primary-lightest sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Your trusted partner for online assessments and coding interviews. We provide real-time support and expert guidance to help you succeed in your technical interviews.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow">
              <a
                href="#process"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-lightest transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#about"
                className="w-full flex items-center justify-center px-8 py-3 border border-primary-lightest text-base font-medium rounded-md text-white hover:bg-primary-light transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
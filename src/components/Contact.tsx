import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      {/* Fixed Contact Button */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="https://t.me/jobthon_35"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Any Doubts?</span>
        </a>
      </motion.div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join our Telegram group for immediate assistance and updates
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://t.me/codechef_137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
            >
              <Send className="h-5 w-5 mr-2" />
              Join Telegram Group
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
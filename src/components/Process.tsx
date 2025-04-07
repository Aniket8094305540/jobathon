import React from 'react';
import { Monitor, Video, MessageSquare, Clock, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessStep = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-space text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h4 className="ml-3 text-lg font-medium text-primary">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="process" className="py-16 bg-gradient-to-br from-primary-lightest/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Step by Step Guide</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Remote Assistance Process
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="space-y-12">
            {/* Online Assessment Help */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Online Assessment Help</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ProcessStep
                  icon={Download}
                  title="Step 1: Download Remote Access Software"
                  description={
                    <div className="space-y-4">
                      <p>Choose and download the appropriate software for your operating system:</p>
                      <div className="flex flex-col space-y-2">
                        <a
                          href="https://www.ultraviewer.net/en/download.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-light hover:text-primary"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Download UltraViewer (Windows)
                        </a>
                        <a
                          href="https://www.teamviewer.com/en-in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-light hover:text-primary"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Download TeamViewer (Mac)
                        </a>
                      </div>
                    </div>
                  }
                  delay={0.2}
                />
                <ProcessStep
                  icon={Monitor}
                  title="Step 2: Setup Remote Connection"
                  description="After installation, launch the application and share your ID and password with our team. We'll establish a secure connection to assist you."
                  delay={0.4}
                />
              </div>
            </div>

            {/* Interview Preparation Help */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Interview Preparation Process</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <ProcessStep
                  icon={Video}
                  title="Step 1: Google Meet Setup"
                  description="Position your phone to capture your laptop screen and join the interview through Google Meet. We'll guide you through the optimal setup."
                  delay={0.6}
                />
                <ProcessStep
                  icon={MessageSquare}
                  title="Step 2: Communication Channel"
                  description="We'll establish a clear communication channel for real-time guidance and support throughout your interview."
                  delay={0.8}
                />
                <ProcessStep
                  icon={Clock}
                  title="Step 3: Practice Session"
                  description="Complete a 30-minute mock interview session to familiarize yourself with the process and perfect your technique."
                  delay={1.0}
                />
              </div>
            </div>

            {/* Additional Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-xl font-semibold text-primary mb-4">Important Guidelines</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ensure stable internet connection before starting</li>
                <li>Test your audio and video setup prior to the interview</li>
                <li>Keep backup communication channels ready</li>
                <li>Follow all security best practices for remote access</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
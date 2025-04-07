import React from 'react';
import { Award, Code, Users } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Jobthon Team
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Expert Team</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Our team consists of coders from prestigious institutions with extensive experience in competitive programming.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Code className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Technical Excellence</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Specialized in coding challenges, interview preparations, and technical assessments.
              </p>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Award className="h-6 w-6" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Proven Success</p>
              <p className="mt-2 ml-16 text-base text-gray-500">
                Track record of helping candidates succeed in their technical interviews and assessments.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="max-w-3xl mx-auto text-xl text-gray-500">
              At Jobthon, we have a team of experts who are passionate about helping you succeed. Our goal is to make sure you get the support you need to ace your assessments and interviews with the correct and confident answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
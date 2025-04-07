import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageGrid from './imageGrid';

const testimonials = [
  {
    name: "Priya S.",
    role: "Software Engineer",
    content: "Jobthon's assistance was invaluable during my technical interview. Their real-time support helped me land my dream job!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Rahul M.",
    role: "Full Stack Developer",
    content: "The mock interview session was extremely helpful. It gave me confidence and prepared me well for the actual interview.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    name: "Anjali K.",
    role: "Frontend Developer",
    content: "Their support during the online assessment was fantastic. The team guided me through complex problems effectively.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="p-6 border border-primary-lightest/20">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
        <div className="mt-6">
          <p className="text-sm font-medium text-primary">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ScreenshotSection = ({ title, description, imageSet}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="mt-16 p-8 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center">
          <ImageGrid images={imageSet}/>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="testimonials" className="py-16 bg-gradient-to-br from-primary-lightest/20 via-white to-primary-lightest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <ScreenshotSection
          title="Online Assessment Success Stories"
          description="See how our platform has helped students excel in their online assessments."
          imageSet={
            [
              './public/images/oa_1.jpg',
              './public/images/oa_2.jpg',
              './public/images/oa_3.jpg',
              './public/images/oa_4.jpg',
              './public/images/oa_5.jpg',
              './public/images/oa_6.jpg',
              './public/images/oa_7.jpg'
            ]
          }
        />

        <ScreenshotSection
          title="Interview Success Stories"
          description="View examples of successful interview sessions with our guidance."
          imageSet={
            [
              './public/images/in_1.jpg',
              './public/images/in_2.jpg',
              './public/images/in_3.jpg',
              './public/images/in_4.jpg',
              './public/images/in_5.jpg',
              './public/images/in_6.jpg',
              './public/images/in_7.jpg',
              './public/images/in_8.jpg'
            ]
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
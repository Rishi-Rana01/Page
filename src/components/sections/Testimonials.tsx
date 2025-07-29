'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'ADmyBRAND AI has completely transformed our marketing strategy. We\'ve seen a 43% increase in conversion rates and saved countless hours on content creation. The AI-generated copy is indistinguishable from human-written content.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'E-commerce Manager',
    company: 'StyleBoutique',
    content: 'The campaign optimization feature alone is worth the investment. Our ad spend efficiency improved by 37% in the first month. The predictive analytics helps us stay ahead of trends and make data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Social Media Strategist',
    company: 'CreativeMinds',
    content: 'Managing multiple social channels used to be a full-time job. With ADmyBRAND AI, I can schedule, optimize, and analyze all our content from one dashboard. The AI suggestions for improving engagement are spot on!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'CMO',
    company: 'GrowthPartners',
    content: 'As a marketing agency, we need tools that scale with our diverse client base. ADmyBRAND AI adapts to each client\'s unique voice and goals. The ROI reporting features make it easy to demonstrate our value to clients.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jessica Park',
    role: 'Digital Marketing Lead',
    company: 'InnovateNow',
    content: 'The audience insights feature uncovered segments we hadn\'t even considered targeting. This led to a completely new campaign that is now our best-performing channel. The AI recommendations continue to surprise us with their accuracy.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="h-full" isGlass={true}>
      <div className="flex h-full flex-col">
        <div className="mb-3 sm:mb-4 flex items-center">
          <div className="mr-3 sm:mr-4 h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full">
            <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        
        <div className="mb-3 sm:mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <blockquote className="flex-1">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
        </blockquote>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  return (
    <section className="py-16 sm:py-20 md:py-24" id="testimonials">
      <Container maxWidth="2xl">
        <div className="mx-auto text-center">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Trusted by Marketers Worldwide
          </h2>
          <p className="animate-on-scroll mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            See what our customers are saying about how ADmyBRAND AI has transformed their marketing efforts.
          </p>
        </div>
        
        <div 
          className="animate-on-scroll mt-10 sm:mt-12 md:mt-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard testimonial={testimonials[activeIndex]} />
                </motion.div>
              </AnimatePresence>
              
              <div className="mt-8 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-primary-600 dark:bg-primary-400' : 'bg-gray-300 dark:bg-gray-700'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-primary-50 p-6 dark:bg-primary-900/20">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">93%</span>
              <span className="text-gray-700 dark:text-gray-300">of customers report increased ROI</span>
            </div>
          </div>
          <div className="rounded-xl bg-primary-50 p-6 dark:bg-primary-900/20">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">4.8/5</span>
              <span className="text-gray-700 dark:text-gray-300">average customer satisfaction</span>
            </div>
          </div>
          <div className="rounded-xl bg-primary-50 p-6 dark:bg-primary-900/20">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">68%</span>
              <span className="text-gray-700 dark:text-gray-300">average time saved on campaign management</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
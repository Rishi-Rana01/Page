'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: 'AI Content Generation',
    description: 'Create compelling ad copy, social media posts, and marketing materials in seconds with our advanced AI.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Campaign Optimization',
    description: 'Our AI analyzes your campaigns in real-time and makes data-driven adjustments to maximize performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Audience Insights',
    description: 'Gain deep understanding of your audience with AI-powered analytics that reveal preferences and behaviors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Channel Management',
    description: 'Manage all your marketing channels from one unified dashboard with intelligent cross-channel insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast campaign performance and identify trends before they happen with our predictive AI models.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Automated Reporting',
    description: 'Save hours with automated reports that highlight key insights and actionable recommendations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const FeatureCard: React.FC<FeatureProps & { index: number }> = ({ title, description, icon, index }) => {
  return (
    <div className="animate-on-scroll">
      <Card isGlass={true} className="h-full transition-all duration-300 hover:translate-y-[-5px]">
        <div className="flex flex-col items-start">
          <div className="mb-3 sm:mb-4 rounded-lg bg-primary-100 p-2 sm:p-3 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
            {icon}
          </div>
          <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </Card>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24" id="features">
      <Container maxWidth="2xl">
        <div className="mx-auto text-center">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Powerful AI Features to Transform Your Marketing
          </h2>
          <p className="animate-on-scroll mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our suite of AI-powered tools helps you create, optimize, and analyze your marketing efforts with unprecedented efficiency and insight.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <div className="animate-on-scroll mt-16 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold">Ready to experience the power of AI in your marketing?</h3>
          <p className="mt-4 text-lg text-white/90">
            Join thousands of marketers who are already using ADmyBRAND AI to revolutionize their campaigns.
          </p>
          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-primary-600 shadow-md transition-all hover:bg-gray-100">
            Start Your Free Trial
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Features;
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: PricingFeature[];
  highlighted?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams just getting started.',
    price: {
      monthly: 29,
      annually: 24,
    },
    features: [
      { name: 'AI Content Generation (5,000 words/mo)', included: true },
      { name: 'Basic Campaign Analytics', included: true },
      { name: 'Single User', included: true },
      { name: 'Email Support', included: true },
      { name: 'Campaign Optimization', included: false },
      { name: 'Advanced Audience Insights', included: false },
      { name: 'Multi-Channel Management', included: false },
      { name: 'Predictive Analytics', included: false },
      { name: 'Custom Reporting', included: false },
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and marketing teams.',
    price: {
      monthly: 79,
      annually: 69,
    },
    highlighted: true,
    features: [
      { name: 'AI Content Generation (25,000 words/mo)', included: true },
      { name: 'Advanced Campaign Analytics', included: true },
      { name: 'Up to 5 Users', included: true },
      { name: 'Priority Email & Chat Support', included: true },
      { name: 'Campaign Optimization', included: true },
      { name: 'Advanced Audience Insights', included: true },
      { name: 'Multi-Channel Management', included: true },
      { name: 'Predictive Analytics', included: false },
      { name: 'Custom Reporting', included: false },
    ],
    cta: 'Go Professional',
  },
  {
    name: 'Enterprise',
    description: 'Advanced features for large organizations with complex needs.',
    price: {
      monthly: 199,
      annually: 169,
    },
    features: [
      { name: 'AI Content Generation (Unlimited)', included: true },
      { name: 'Enterprise-grade Analytics', included: true },
      { name: 'Unlimited Users', included: true },
      { name: '24/7 Priority Support with Dedicated Manager', included: true },
      { name: 'Advanced Campaign Optimization', included: true },
      { name: 'Enterprise Audience Insights', included: true },
      { name: 'Multi-Channel Management', included: true },
      { name: 'Predictive Analytics', included: true },
      { name: 'Custom Reporting', included: true },
    ],
    cta: 'Contact Sales',
  },
];

const PricingCard: React.FC<{ tier: PricingTier; isAnnual: boolean }> = ({ tier, isAnnual }) => {
  const price = isAnnual ? tier.price.annually : tier.price.monthly;
  
  return (
    <div className="animate-on-scroll">
      <Card 
        className={`h-full ${tier.highlighted ? 'border-primary-500 ring-2 ring-primary-500 dark:border-primary-400 dark:ring-primary-400' : ''}`}
        hasShadow={true}
      >
        <div className="flex h-full flex-col">
          {tier.highlighted && (
            <div className="-mt-5 mb-4 rounded-full bg-primary-500 px-3 py-1 text-center text-sm font-medium text-white">
              Most Popular
            </div>
          )}
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{tier.name}</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">{tier.description}</p>
          
          <div className="mt-3 sm:mt-4 flex items-baseline">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">${price}</span>
            <span className="ml-1 text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-300">/mo</span>
          </div>
          
          {isAnnual && (
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              Save ${(tier.price.monthly - tier.price.annually) * 12} annually
            </p>
          )}
          
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.included ? (
                  <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={feature.included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 sm:mt-8 flex flex-1 items-end">
            <Button 
              variant={tier.highlighted ? 'primary' : 'outline'} 
              fullWidth
            >
              {tier.cta}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <section className="py-16 sm:py-20 md:py-24" id="pricing">
      <Container maxWidth="2xl">
        <div className="mx-auto text-center">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="animate-on-scroll mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
          
          <div className="animate-on-scroll mt-8 flex items-center justify-center">
            <div className="relative flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
              <button
                className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors ${!isAnnual ? 'bg-white text-gray-900 shadow-md dark:bg-gray-700 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`relative w-32 rounded-full py-2 text-sm font-medium transition-colors ${isAnnual ? 'bg-white text-gray-900 shadow-md dark:bg-gray-700 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
                <span className="absolute -right-2 -top-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>
        
        <div className="animate-on-scroll mt-10 sm:mt-12 md:mt-16 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 md:p-8 text-center dark:border-gray-700 dark:bg-gray-800/50">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Need a custom solution?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Contact our sales team for a custom plan tailored to your specific needs.
          </p>
          <Button variant="outline" className="mt-4">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
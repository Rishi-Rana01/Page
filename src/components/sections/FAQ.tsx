'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'ADmyBRAND AI Suite is a comprehensive marketing platform powered by artificial intelligence. It helps businesses create, optimize, and analyze their marketing campaigns across multiple channels with features like AI content generation, campaign optimization, audience insights, and predictive analytics.',
  },
  {
    question: 'How does the AI content generation work?',
    answer: 'Our AI content generation uses advanced natural language processing models to create marketing copy, social media posts, ad headlines, and more. You can specify your brand voice, target audience, and campaign goals, and the AI will generate relevant, engaging content that matches your requirements.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial on all our plans. You can access all features of your chosen plan during the trial period with no obligation to continue. No credit card is required to start your trial.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Absolutely! You can upgrade your plan at any time, and the new features will be immediately available. If you need to downgrade, the change will take effect at the start of your next billing cycle. There are no penalties for changing plans.',
  },
  {
    question: 'How does the campaign optimization feature work?',
    answer: 'Our campaign optimization uses machine learning algorithms to analyze your campaign performance in real-time. It identifies underperforming elements and suggests improvements based on historical data and current trends. The system can also automatically adjust campaign parameters within limits you set to maximize ROI.',
  },
  {
    question: 'Is my data secure with ADmyBRAND AI?',
    answer: 'Yes, we take data security very seriously. All data is encrypted both in transit and at rest. We comply with GDPR, CCPA, and other relevant data protection regulations. We never share your data with third parties, and you retain full ownership of all your content and campaign information.',
  },
  {
    question: 'Do I need technical skills to use the platform?',
    answer: 'No technical skills are required. Our platform is designed with an intuitive interface that makes it easy for marketers of all skill levels to use. We also provide comprehensive documentation, video tutorials, and customer support to help you get the most out of the platform.',
  },
  {
    question: 'Can I integrate ADmyBRAND AI with my existing tools?',
    answer: 'Yes, ADmyBRAND AI integrates with popular marketing tools and platforms including Google Analytics, Facebook Ads, Instagram, Twitter, LinkedIn, Mailchimp, HubSpot, Shopify, and many more. We also offer an API for custom integrations.',
  },
];

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggleOpen: () => void }> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="border-b border-gray-200 py-6 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" id="faq">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="animate-on-scroll text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="animate-on-scroll mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have questions about ADmyBRAND AI? Find answers to common questions below.
          </p>
        </div>

        <div className="animate-on-scroll mt-12 mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="animate-on-scroll mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? We're here to help.
          </p>
          <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600">
            Contact Support
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
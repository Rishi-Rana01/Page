'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-200 opacity-20 blur-3xl dark:bg-primary-900"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary-200 opacity-20 blur-3xl dark:bg-secondary-900"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container maxWidth="2xl">
        <div className="mx-auto text-center">
          <motion.h1 
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Revolutionize Your Marketing</span>
            <span className="mt-2 block text-primary-600 dark:text-primary-400">With AI-Powered Insights</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ADmyBRAND AI Suite helps you create, optimize, and analyze your marketing campaigns with the power of artificial intelligence. Save time, increase ROI, and outperform your competition.
          </motion.p>
          
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.413-1.667-.13-1.667-.986V5.653z" />
              </svg>
              Watch Demo
            </Button>
          </motion.div>
          
          {/* Dashboard Preview Image */}
          <motion.div 
            className="mt-16 animate-on-scroll"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl shadow-2xl">
              <div className="glass absolute inset-0 z-10 rounded-xl" />
              <div className="relative z-20 rounded-t-xl bg-gray-800 px-4 py-2 text-left">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-xs text-gray-400">ADmyBRAND AI Dashboard</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-b-xl bg-white">
                {/* Replace with actual dashboard image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 p-4 dark:from-gray-800 dark:to-gray-900">
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-8 w-48 rounded-md bg-primary-100 dark:bg-primary-900" />
                      <div className="flex space-x-2">
                        <div className="h-8 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                        <div className="h-8 w-24 rounded-md bg-primary-500" />
                      </div>
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-4">
                      <div className="col-span-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
                        <div className="mb-2 h-6 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-40 rounded-md bg-gray-100 dark:bg-gray-700" />
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
                          <div className="mb-2 h-6 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                          <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-700" />
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
                          <div className="mb-2 h-6 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                          <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Trust badges */}
          <div className="mt-12 animate-on-scroll">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted by innovative companies</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
                <div key={index} className="h-8 w-32 rounded bg-gray-200 dark:bg-gray-800" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
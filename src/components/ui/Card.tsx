import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isGlass?: boolean;
  hasShadow?: boolean;
  hasBorder?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isGlass = false,
  hasShadow = true,
  hasBorder = true,
  padding = 'md',
  animate = false,
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const glassStyles = isGlass ? 'glass' : 'bg-white dark:bg-gray-800';
  
  const shadowStyles = hasShadow 
    ? 'shadow-lg hover:shadow-xl transition-shadow duration-300' 
    : '';
  
  const borderStyles = hasBorder && !isGlass 
    ? 'border border-gray-200 dark:border-gray-700' 
    : '';
  
  const paddingStyles = {
    none: '',
    sm: 'p-2 sm:p-3 md:p-4',
    md: 'p-3 sm:p-4 md:p-5 lg:p-6',
    lg: 'p-4 sm:p-6 md:p-7 lg:p-8 xl:p-10',
  };

  const cardContent = (
    <div 
      className={`
        ${baseStyles} 
        ${glassStyles} 
        ${shadowStyles} 
        ${borderStyles} 
        ${paddingStyles[padding]} 
        ${className}
      `}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default Card;
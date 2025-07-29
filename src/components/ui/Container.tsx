import React from 'react';

interface ContainerProps {
  children: React.ReactNode;

  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  id,
  maxWidth = 'xl',
}) => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl md:max-w-2xl lg:max-w-4xl',
    '2xl': 'max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl',
    full: 'max-w-full',
  };

  return (
    
    <Component
      id={id}
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${maxWidthClasses[maxWidth]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
};

export default Container;
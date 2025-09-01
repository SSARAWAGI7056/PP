import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getTransformClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} ${durationClass} transform translate-y-16 opacity-0`;
        case 'down':
          return `${baseClasses} ${durationClass} transform -translate-y-16 opacity-0`;
        case 'left':
          return `${baseClasses} ${durationClass} transform translate-x-16 opacity-0`;
        case 'right':
          return `${baseClasses} ${durationClass} transform -translate-x-16 opacity-0`;
        case 'fade':
          return `${baseClasses} ${durationClass} opacity-0`;
        default:
          return `${baseClasses} ${durationClass} transform translate-y-16 opacity-0`;
      }
    }
    
    return `${baseClasses} ${durationClass} transform translate-y-0 translate-x-0 opacity-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
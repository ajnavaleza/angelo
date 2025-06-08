import { useEffect, useRef } from 'react';

interface AnimationOptions {
  delay?: number;
  duration?: number;
  easing?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const useAnimations = () => {
  const fadeInUp = (selector: string, options: AnimationOptions = {}) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element, index) => {
      const htmlElement = element as HTMLElement;
      // Set initial state
      htmlElement.style.transform = 'translateY(50px)';
      htmlElement.style.opacity = '0';
      
      // Animate
      setTimeout(() => {
        htmlElement.style.transition = `all ${options.duration || 800}ms ${options.easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}`;
        htmlElement.style.transform = 'translateY(0px)';
        htmlElement.style.opacity = '1';
      }, (options.delay || 0) + (index * 100));
    });
  };



  const slideIn = (selector: string, options: AnimationOptions = {}) => {
    const { direction = 'left', delay = 0, duration = 800, easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' } = options;
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element: Element, index) => {
      const htmlElement = element as HTMLElement;
      // Set initial state based on direction
      let initialTransform = '';
      switch (direction) {
        case 'left':
          initialTransform = 'translateX(-100px)';
          break;
        case 'right':
          initialTransform = 'translateX(100px)';
          break;
        case 'up':
          initialTransform = 'translateY(-50px)';
          break;
        case 'down':
          initialTransform = 'translateY(50px)';
          break;
      }
      
      htmlElement.style.transform = initialTransform;
      htmlElement.style.opacity = '0';
      
      // Animate
      setTimeout(() => {
        htmlElement.style.transition = `all ${duration}ms ${easing}`;
        htmlElement.style.transform = 'translateX(0px) translateY(0px)';
        htmlElement.style.opacity = '1';
      }, delay + (index * 100));
    });
  };

  const staggerAnimation = (selector: string, options: AnimationOptions = {}) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element, index) => {
      const htmlElement = element as HTMLElement;
      // Set initial state
      htmlElement.style.transform = 'translateY(30px)';
      htmlElement.style.opacity = '0';
      
      // Animate
      setTimeout(() => {
        htmlElement.style.transition = `all ${options.duration || 600}ms ${options.easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}`;
        htmlElement.style.transform = 'translateY(0px)';
        htmlElement.style.opacity = '1';
      }, (options.delay || 0) + (index * 100));
    });
  };

  const scaleIn = (selector: string, options: AnimationOptions = {}) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element, index) => {
      const htmlElement = element as HTMLElement;
      // Set initial state
      htmlElement.style.transform = 'scale(0.8)';
      htmlElement.style.opacity = '0';
      
      // Animate
      setTimeout(() => {
        htmlElement.style.transition = `all ${options.duration || 600}ms ${options.easing || 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'}`;
        htmlElement.style.transform = 'scale(1)';
        htmlElement.style.opacity = '1';
      }, (options.delay || 0) + (index * 100));
    });
  };

  const pulseAnimation = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.animation = 'pulse-custom 2s ease-in-out infinite';
    });
  };

  return {
    fadeInUp,
    slideIn,
    staggerAnimation,
    scaleIn,
    pulseAnimation,
  };
};

export const useIntersectionAnimation = (animationFn: () => void, options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFn();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationFn, options]);

  return ref;
}; 
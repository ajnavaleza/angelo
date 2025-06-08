'use client';

import { useEffect } from 'react';
import { useAnimations } from '../hooks/useAnimations';

const FloatingElements = () => {
  const { pulseAnimation } = useAnimations();

  useEffect(() => {
    // Animate floating elements with different delays
    setTimeout(() => pulseAnimation('.floating-circle-1'), 100);
    setTimeout(() => pulseAnimation('.floating-circle-2'), 200);
    setTimeout(() => pulseAnimation('.floating-circle-3'), 300);
    setTimeout(() => pulseAnimation('.floating-square-1'), 400);
    setTimeout(() => pulseAnimation('.floating-square-2'), 500);
  }, [pulseAnimation]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Circles */}
      <div className="floating-circle-1 absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-sm"></div>
      <div className="floating-circle-2 absolute top-40 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-sm"></div>
      <div className="floating-circle-3 absolute bottom-40 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-sm"></div>
      
      {/* Floating Squares */}
      <div className="floating-square-1 absolute top-60 right-40 w-16 h-16 bg-purple-500/5 rotate-45 blur-sm"></div>
      <div className="floating-square-2 absolute bottom-20 right-10 w-20 h-20 bg-pink-500/5 rotate-12 blur-sm"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
};

export default FloatingElements; 
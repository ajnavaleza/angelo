'use client';

import { useEffect, useState } from 'react';

const CursorGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20"></div>
      
      <div
        className="absolute w-96 h-96 opacity-25 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192, // Center the 384px (w-96) circle on cursor
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.25) 35%, rgba(59, 130, 246, 0.15) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      
      <div
        className="absolute w-64 h-64 opacity-15 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};

export default CursorGradient; 
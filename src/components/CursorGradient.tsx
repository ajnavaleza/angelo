'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/CursorGradient.module.css';

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
    <div className={styles.cursorGradientRoot}>
      <div className={styles.cursorGradientBg}></div>
      <div
        className={styles.cursorGradientCircleLarge}
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <div
        className={styles.cursorGradientCircleSmall}
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};

export default CursorGradient; 
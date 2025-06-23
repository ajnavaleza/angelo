'use client';

// components/About.tsx
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import SectionWrapper from "./SectionWrapper";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import styles from '../styles/About.module.css';
import { RESUME_LINK } from '../config/resume';

const TypingText = ({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  return <span>{displayText}</span>;
};

const About = () => {
  const { fadeInUp, slideIn, scaleIn, staggerAnimation } = useAnimations();

  // Animate elements when the component comes into view
  const animateElements = () => {
    // Profile image animation
    scaleIn('.profile-image', { delay: 200, duration: 800 });
    
    // Main heading animations
    slideIn('.main-title', { direction: 'up', delay: 400, duration: 800 });
    fadeInUp('.typing-title', { delay: 600, duration: 800 });
    
    // Buttons animation
    staggerAnimation('.action-button', { delay: 1000 });
    
    // Social icons animation
    staggerAnimation('.social-icon', { delay: 1200 });
  };

  const ref = useIntersectionAnimation(animateElements);

  return (
    <SectionWrapper id="about" title="">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.aboutContainer}>
        <Card className={`${styles.profileImage} profile-image`}>
          <CardContent className={styles.profileImageContent}>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/web.jpg"
                alt="Angelo"
                width={400}
                height={400}
                className={styles.profileImagePic}
                priority
              />
            </div>
          </CardContent>
        </Card>

        <h1 className={`${styles.mainTitle} main-title`}>
          Hi, I&apos;m {" "}
          <span className={styles.nameGradient}>Angelo.</span>
        </h1>

        <h1 className={`${styles.typingTitle} typing-title`}>
          <TypingText text="CS @ University of Maryland" speed={100} />
          <span className={styles.typingCursor}>|</span>
        </h1>

        <Separator className={styles.separator} />

        <div className={styles.actionButtons}>
          <Button
            asChild
            className={`${styles.downloadButton} action-button`}
            size="lg"
          >
            <a href={RESUME_LINK} download>
              <Download size={20} className={styles.downloadIcon} />
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`${styles.viewWorkButton} action-button`}
            size="lg"
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>

        <Separator className={styles.separator} />

        <div className={styles.socialIcons}>
          <Button
            variant="ghost"
            size="icon"
            className={`${styles.socialIcon} social-icon`}
            asChild
          >
            <a href="https://github.com/ajnavaleza" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github style={{ width: '2rem', height: '2rem' }} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${styles.socialIcon} social-icon`}
            asChild
          >
            <a href="https://linkedin.com/in/angelo-navaleza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin style={{ width: '2rem', height: '2rem' }} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`${styles.socialIcon} social-icon`}
            asChild
          >
            <a href="mailto:aj.navaleza@gmail.com" aria-label="Email Me">
              <Mail style={{ width: '2rem', height: '2rem' }} />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

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
      <div ref={ref as React.RefObject<HTMLDivElement>} className="container mx-auto px-4 py-2 text-center">
        <Card className="profile-image border-0 bg-transparent shadow-none opacity-0 max-w-fit mx-auto mb-6">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src="/web.jpg"
                alt="Angelo"
                width={400}
                height={400}
                className="rounded-full shadow-2xl object-cover border-4 border-gradient-to-r from-purple-500 to-pink-500"
                priority
              />
            </div>
          </CardContent>
        </Card>

        <h1 className="main-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white opacity-0">
          Hi, I&apos;m {" "} 
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
             Angelo.
          </span>
        </h1>

        <h1 className="typing-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white opacity-0">
          <TypingText text="CS @ University of Maryland" speed={100} />
          <span className="animate-pulse">|</span>
        </h1>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent h-px" />
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <Button 
            asChild
            className="action-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0"
            size="lg"
          >
            <a href="https://drive.google.com/file/d/1_mywk4tUybBwOSKijKHy4V6laR3hWbh8/view?usp=sharing" download>
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="action-button border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 opacity-0"
            size="lg"
          >
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent h-px" />
        
        <div className="flex justify-center items-center space-x-12">
          <Button
            variant="ghost"
            size="icon"
            className="social-icon text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 opacity-0 h-24 w-24"
            asChild
          >
            <a href="https://github.com/ajnavaleza" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github style={{ width: '2rem', height: '2rem' }} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="social-icon text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 opacity-0 h-24 w-24"
            asChild
          >
            <a href="https://linkedin.com/in/angelo-navaleza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin style={{ width: '2rem', height: '2rem' }} />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="social-icon text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 opacity-0 h-24 w-24"
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

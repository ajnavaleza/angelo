'use client';

import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import styles from '../styles/ProjectsDetails.module.css';

const projects = [
    {
    title: 'Baltimore Ravens Data Analytics Project',
    description: 'Applied statistical modeling and predictive analytics on data for 5,000+ NCAA football players with interactive Power BI and Tableau dashboards.',
    image: '/rave.PNG',
    tech: [
      { name: 'Python', color: 'bg-yellow-500' },
      { name: 'Power BI', color: 'bg-orange-500' },
      { name: 'Tableau', color: 'bg-blue-500' },
      { name: 'SQL', color: 'bg-purple-500' }
    ],
    github: 'https://github.com/arbaji22/ravensproject.github.io',
    external: 'https://arbaji22.github.io/arbaji.github.io/',
  },
  {
    title: 'SetPlanner.io',
    description: 'Engineered a full-stack web platform that auto-generates DJ setlists based on user-defined genre and artist inputs using AI-driven recommendations.',
    image: '/set.PNG',
    tech: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Next.js', color: 'bg-purple-500' },
      { name: 'Spotify API', color: 'bg-green-500' },
    ],
    github: 'https://github.com/ajnavaleza/SetPlanner.io',
    external: 'https://set-planner-io.vercel.app/',
  },
  {
    title: 'NFL Play Intelligence System',
    description: 'Engineered an end-to-end data analytics platform that processes 20,000+  NFL play-by-play records to deliver intelligent play-calling recommendations through machine learning.',
    image: '/nfl.PNG',
    tech: [
      { name: 'Python', color: 'bg-yellow-500' },
      { name: 'Pandas', color: 'bg-blue-500' },
      { name: 'Scikit-learn', color: 'bg-orange-500' },
      { name: 'XGBoost', color: 'bg-green-500' }
    ],
    github: 'https://github.com/ajnavaleza/nfl-play-ML',
    external: 'https://nfl-play-ml.streamlit.app/',
  },
  {
    title: 'PokeVault',
    description: 'Developed a web application that allows users to search for Pokémon, view their details, and manage their collection of Pokémon cards.',
    image: '/poke.PNG',
    tech: [
      { name: 'HTML', color: 'bg-orange-500' },
      { name: 'CSS', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-500' },
      { name: 'PokeAPI', color: 'bg-purple-500' },
    ],
    github: 'https://github.com/ajnavaleza/PokeVault',
    external: 'https://p0ke-vault.vercel.app/',
  },
  {
    title: 'Investment Portfolio',
    description: 'Architected a modern full-stack SPA enabling users to track, analyze, and optimize investment portfolios with real-time market data visualization and performance analytics.',
    image: '/port.PNG',
    tech: [
      { name: 'Angular 16', color: 'bg-red-500' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'Firebase', color: 'bg-orange-500' },
      { name: 'Alpha Vantage API', color: 'bg-purple-500' },
    ],
    github: 'https://github.com/ajnavaleza/InvestmentPortfolio',
    external: 'https://investment-portfolio-ten.vercel.app/',
  }
];

const ProjectsDetails = () => {
  const { fadeInUp, staggerAnimation } = useAnimations();

  const animateProjects = () => {
    // Animate title
    fadeInUp('.projects-title', { delay: 200, duration: 800 });
    
    // Stagger animate project cards
    staggerAnimation('.project-card', { delay: 400 });
  };

  const ref = useIntersectionAnimation(animateProjects);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        {/* Heading */}
        <h2 className={`${styles.projectsTitle} projects-title`}>Projects</h2>
        <Separator className={styles.projectsSeparator} />
        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.title} className={`${styles.projectCard} project-card`}>
              <div className={styles.projectImageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImage}
                  priority={false}
                />
                <div className={styles.projectImageOverlay} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTechList}>
                  {project.tech.map(tech => (
                    <Badge 
                      key={tech.name}
                      className={`${styles.projectTechBadge} ${tech.color}`}
                      variant="secondary"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className={styles.projectActions}>
                <Button
                  variant="outline"
                  size="sm"
                  className={styles.projectCodeButton}
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className={styles.projectActionIcon} />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className={styles.projectDemoButton}
                  asChild
                >
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className={styles.projectActionIcon} />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails; 
'use client';

import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const projects = [
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
  },
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
    external: 'https://nfl-play-predictor.streamlit.app/',
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
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
      <div className="max-w-6xl w-full mx-auto">
        {/* Heading */}
        <h2 className="projects-title text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 opacity-0">
          Projects
        </h2>
        
        <Separator className="my-8 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent h-px" />
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card group bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 opacity-0 overflow-hidden rounded-lg">
              <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <Badge 
                      key={tech.name}
                      className={`${tech.color} hover:scale-110 transition-transform duration-200 text-white font-semibold cursor-pointer`}
                      variant="secondary"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>

                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  asChild
                >
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
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
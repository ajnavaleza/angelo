'use client';

import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    company: 'Baltimore Ravens',
    position: 'Data Analytics Intern',
    location: 'Baltimore, MD',
    description: [
      '• Applied statistical modeling and predictive analytics on data for 5,000+ NCAA football players',
      '• Created interactive Power BI and Tableau dashboards for data visualization',
      '• Implemented machine learning models for player performance prediction',
      '• Collaborated with analytics team to optimize player scouting processes'
    ],
    date: 'September 2024 - November 2024',
    logo: '/ravens.jpg',
    logoType: 'image',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    type: 'Internship'
  },
  {
    company: 'HouseMate',
    position: 'Software Development Intern',
    location: 'College Park, MD',
    description: [
      '• Implemented serverless Python microservices on AWS Lambda with API Gateway to support real-time household management features.',
      '• Containerized Node.js services with Docker and deployed on Amazon ECS; defined infrastructure via Terraform for reproducible environments.',
      '• Enhanced platform scalability and performance by integrating asynchronous event-driven workflows with Amazon SQS and Lambda, reducing response latency for critical user actions by 40%.'
    ],
    date: 'June 2024 - August 2024',
    logo: '/shell.png',
    logoType: 'image',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
    type: 'Internship'
  }
];

const ExperienceDetails = () => {
  const { fadeInUp, slideIn, staggerAnimation } = useAnimations();

  const animateExperience = () => {
    // Animate title
    fadeInUp('.experience-title', { delay: 200, duration: 800 });
    
    // Animate timeline line
    slideIn('.timeline-line', { direction: 'up', delay: 400, duration: 1000 });
    
    // Stagger animate experience items
    staggerAnimation('.experience-item', { delay: 600 });
  };

  const ref = useIntersectionAnimation(animateExperience);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
      <div className="max-w-4xl w-full mx-auto">
        {/* Heading */}
        <h2 className="experience-title text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 opacity-0">
          Experience
        </h2>
        
        <Separator className="my-8 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent h-px" />
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-0"></div>
          
          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item relative flex items-start opacity-0">
                {/* Timeline Avatar */}
                <div className="flex-shrink-0 z-10">
                  <Avatar className="w-16 h-16 border-4 border-background shadow-lg hover:scale-110 transition-transform duration-300">
                    {exp.logoType === 'image' ? (
                      <AvatarImage 
                        src={exp.logo} 
                        alt={exp.company}
                        className="object-contain object-center w-full h-full"
                      />
                    ) : (
                      <AvatarFallback className={`${exp.bgColor} ${exp.textColor} text-xl font-bold`}>
                        {exp.logo}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>
                
                {/* Content Card */}
                <Card className="ml-8 flex-1 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {exp.position}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-semibold text-gray-300">
                      {exp.company} • {exp.location}
                    </CardDescription>
                    <Badge 
                      variant="outline" 
                      className="text-blue-400 border-blue-400/50 hover:border-blue-400 w-fit mt-2"
                    >
                      {exp.date}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((item, i) => (
                          <p key={i} className="text-gray-300 hover:text-white transition-colors duration-200 leading-relaxed">
                            {item}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-300">{exp.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetails;
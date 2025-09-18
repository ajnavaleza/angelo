'use client';

import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import styles from '../styles/ExperienceDetails.module.css';

const experiences = [
  {
    company: 'Erickson Senior Living',
    position: 'Data Operations and Analytics Intern',
    location: 'Catonsville, MD',
    description: [
      '• Designed and optimized Python-based ETL workflows to ingest, cleanse, and standardize departmental data, streamlining reporting processes and accelerating delivery timelines by 40\%.',
      '• Leveraged advanced SQL queries to aggregate and integrate relational datasets, generating KPI dashboards that enhanced executive visibility into operational performance.',
      '• Executed large-scale analytical projects by applying statistical modeling and visualization techniques to uncover inefficiencies and recommend data-backed process improvements.'
    ],
    date: 'September 2025 - Present',
    logo: '/erickson.png',
    logoType: 'image',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
    type: 'Internship'
  },
  {
    company: 'Baltimore Ravens (in partnership with Levy & E15 Group)',
    position: 'Operational Analyst Intern',
    location: 'Baltimore, MD',
    description: [
      '• Engineered comprehensive auditing workflows for 10+ NFL stadium events, validating digital signage systems and POS integrations across 50+ concession endpoints.',
      '• Developed data collection methodologies capturing 500+ metrics per event and implemented analytical models that reduced customer wait times by 20%.',
      '• Built automated reporting pipelines in Python and Excel to process operational datasets and delivered data-driven recommendations to executive stakeholders.',
    ],
    date: 'July 2025 - Present',
    logo: '/ravens.jpg',
    logoType: 'image',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    type: 'Internship'
  },
  {
    company: 'Baltimore Ravens',
    position: 'Data Analytics Intern',
    location: 'Owings Mills, MD',
    description: [
      '• Performed statistical analysis and built predictive models on datasets of over 5,000 NCAA football players to support data-informed scouting evaluations for the 2025 NFL Draft.',
      '• Embedded interactive Power BI and Tableau dashboards into an internal platform accessed by 20+ scouting staff, enabling comparative analysis of player metrics.',
      '• Automated weekly Python workflows to clean and process 50,000+ new data points, reducing time spent on manual data handling by approximately 10 hours per week.',
    ],
    date: 'September 2024 - November 2024',
    logo: '/ravens.jpg',
    logoType: 'image',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    type: 'Internship'
  },
  
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
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        {/* Heading */}
        <h2 className={`${styles.experienceTitle} experience-title`}>Experience</h2>
        <Separator className={styles.experienceSeparator} />
        {/* Timeline */}
        <div className={styles.timelineWrapper}>
          {/* Vertical Line */}
          <div className={`${styles.timelineLine} timeline-line`}></div>
          {/* Experience Items */}
          <div className={styles.experienceItems}>
            {experiences.map((exp, index) => (
              <div key={index} className={`${styles.experienceItem} experience-item`}>
                {/* Timeline Avatar */}
                <div className={styles.timelineAvatarWrapper}>
                  <Avatar className={styles.timelineAvatar}>
                    {exp.logoType === 'image' ? (
                      <AvatarImage 
                        src={exp.logo} 
                        alt={exp.company}
                        className={styles.timelineAvatarImage}
                      />
                    ) : (
                      <AvatarFallback className={`${exp.bgColor} ${exp.textColor} ${styles.timelineAvatarFallback}`}>
                        {exp.logo}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>
                {/* Content Card */}
                <Card className={styles.experienceCard}>
                  <CardHeader>
                    <div className={styles.experienceCardHeader}>
                      <CardTitle className={styles.experienceCardTitle}>
                        {exp.position}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={styles.experienceTypeBadge}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    <CardDescription className={styles.experienceCompany}>
                      {exp.company} • {exp.location}
                    </CardDescription>
                    <Badge 
                      variant="outline" 
                      className={styles.experienceDateBadge}
                    >
                      {exp.date}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className={styles.experienceDescription}>
                      {Array.isArray(exp.description) ? (
                        exp.description.map((item, i) => (
                          <p key={i} className={styles.experienceDescriptionItem}>
                            {item}
                          </p>
                        ))
                      ) : (
                        <p className={styles.experienceDescriptionItem}>{exp.description}</p>
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
'use client';

import { SiAmazonec2, SiPython, SiJavascript, SiTypescript, SiHtml5, SiSwift,SiExpress, SiMysql, SiTailwindcss, SiUnity, SiFlutter, SiRedis, SiFirebase, SiNumpy, SiPandas, SiOcaml, SiMongodb, SiGit, SiDocker, SiC, SiTableau, SiReact, SiRailway, SiNextdotjs} from "react-icons/si";
import { BiLogoJava} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import styles from '../styles/SkillsDetails.module.css';

const skillsData = {
  Languages: [
    { name: 'C', icon: <SiC/> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <BiLogoJava /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML/CSS', icon: <SiHtml5 /> },
    { name: 'OCaml', icon: <SiOcaml /> },
    { name: 'Swift', icon: <SiSwift /> },
    { name: 'SQL', icon: <SiMysql /> }
  ],
  Frameworks: [
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Unity', icon: <SiUnity /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'pandas', icon: <SiPandas /> },
    { name: 'Tableau', icon: <SiTableau/> },
  ],
  'Developer Tools': [
    { name: 'Git', icon: <SiGit /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'AWS EC2', icon: <SiAmazonec2 /> },
    { name: 'Railway', icon: <SiRailway /> },
    { name: 'VS Code', icon: <VscVscode /> }
  ]
};

const SkillsDetails = () => {
  const { fadeInUp, staggerAnimation } = useAnimations();

  const animateSkills = () => {
    // Animate main title
    fadeInUp('.skills-title', { delay: 200, duration: 800 });
    
    // Animate category cards with stagger
    staggerAnimation('.skill-category-card', { delay: 400 });
  };

  const ref = useIntersectionAnimation(animateSkills);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        {/* Heading */}
        <h2 className={`${styles.skillsTitle} skills-title`}>Skills</h2>
        <Separator className={styles.skillsSeparator} />
        {/* Skills Categories */}
        <div className={styles.skillsCategories}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className={`${styles.skillsCategoryCard} skill-category-card`}>
              <CardHeader className={styles.skillsCategoryHeader}>
                <CardTitle className={styles.skillsCategoryTitle}>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, index) => (
                    <Card key={index} className={styles.skillsItemCard}>
                      <CardContent className={styles.skillsItemContent}>
                        <div className={styles.skillsItemIcon}>
                          {skill.icon}
                        </div>
                        <div className={styles.skillsItemName}>{skill.name}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDetails; 
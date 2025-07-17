'use client';

import { SiPython, SiJavascript, SiTypescript, SiHtml5, SiRust, SiSwift, SiDart, SiMysql, SiTailwindcss, SiUnity, SiFlutter, SiRedis, SiFirebase, SiNumpy, SiPandas, SiOcaml, SiMongodb, SiGit, SiDocker, SiC, SiTableau, SiIntellijidea, SiAndroidstudio, SiEclipseide, SiXcode, SiRailway, SiPostman, SiReact} from "react-icons/si";
import { BiLogoJava} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { useAnimations, useIntersectionAnimation } from '../hooks/useAnimations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const skillsData = {
  Languages: [
    { name: 'C', icon: <SiC/> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <BiLogoJava /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'OCaml', icon: <SiOcaml /> },
    { name: 'Rust', icon: <SiRust /> },
    { name: 'Dart', icon: <SiDart /> },
    { name: 'Swift', icon: <SiSwift /> },
    { name: 'SQL', icon: <SiMysql /> }
  ],
  Frameworks: [
    { name: 'HTML/CSS', icon: <SiHtml5 /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Unity', icon: <SiUnity /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'pandas', icon: <SiPandas /> },
    { name: 'Tableau', icon: <SiTableau/> }
  ],
  'Developer Tools': [
    { name: 'Git', icon: <SiGit /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Railway', icon: <SiRailway /> }
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
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
      <div className="max-w-full w-full mx-auto px-4">
        {/* Heading */}
        <h2 className="skills-title text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 opacity-0">
          Skills
        </h2>
        
        <Separator className="my-8 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent h-px" />
        
        {/* Skills Categories */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="skill-category-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 opacity-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {skills.map((skill, index) => (
                    <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center h-[100px] relative">
                        <div className="text-4xl mb-3 text-gray-300 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <div className="text-white text-sm font-medium">{skill.name}</div>
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
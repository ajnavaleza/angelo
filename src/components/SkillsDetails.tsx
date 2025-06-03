import { SiPython, SiJavascript, SiTypescript, SiHtml5, SiRust, SiSwift, SiDart, SiMysql, SiTailwindcss, SiUnity, SiFlutter, SiRedis, SiFirebase, SiNumpy, SiPandas, SiOcaml, SiMongodb, SiGit, SiDocker, SiC, SiTableau, SiIntellijidea, SiAndroidstudio, SiEclipseide, SiXcode, SiNextdotjs} from "react-icons/si";
import { BiLogoJava} from "react-icons/bi";
import { DiVisualstudio} from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skillsData = {
  Languages: [
    { name: 'C', icon: <SiC/> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <BiLogoJava /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML/CSS', icon: <SiHtml5 /> },
    { name: 'OCaml', icon: <SiOcaml /> },
    { name: 'Rust', icon: <SiRust /> },
    { name: 'Dart', icon: <SiDart /> },
    { name: 'Swift', icon: <SiSwift /> },
    { name: 'SQL', icon: <SiMysql /> }
  ],
  Frameworks: [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
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
    { name: 'VS Code', icon: <VscVscode /> },
    { name: 'Visual Studio', icon: <DiVisualstudio/> },
    { name: 'IntelliJ', icon: <SiIntellijidea/> },
    { name: 'Eclipse', icon: <SiEclipseide/> },
    { name: 'Android Studio', icon: <SiAndroidstudio /> },
    { name: 'Xcode', icon: <SiXcode/> }
  ]
};

const SkillsDetails = () => (
  <section id="skills" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
    <div className="max-w-full w-full mx-auto px-4">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Skills
      </h2>
      
      {/* Skills Categories */}
      <div className="space-y-16 max-w-7xl mx-auto">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-300">
              {category}
            </h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg px-6 py-4 flex flex-col items-center justify-center text-center h-[100px] hover:bg-[#2a2a2a] hover:scale-105 transition-all duration-300 shadow-lg border border-gray-800 hover:border-gray-600"
                >
                  <div className="text-4xl mb-2 text-gray-300 hover:text-white transition-colors duration-300">{skill.icon}</div>
                  <div className="text-white text-sm font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsDetails; 
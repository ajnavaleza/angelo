const skillsData = {
  Languages: [
    { name: 'C', icon: 'C' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'OCaml', icon: '🐫' },
    { name: 'Rust', icon: '🦀' },
    { name: 'Dart', icon: '💎' },
    { name: 'Swift', icon: '🐦' },
    { name: 'SQL', icon: '🗃️' }
  ],
  Frameworks: [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'TailwindCSS', icon: '💨' },
    { name: 'Unity', icon: '🎮' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Tableau', icon: '📋' },
    { name: 'REST API', icon: '🔗' }
  ],
  'Developer Tools': [
    { name: 'Git', icon: '🌿' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Visual Studio', icon: '🔵' },
    { name: 'IntelliJ', icon: '🧠' },
    { name: 'Eclipse', icon: '🌙' },
    { name: 'Android Studio', icon: '🤖' },
    { name: 'Xcode', icon: '🍎' }
  ]
};

const SkillsDetails = () => (
  <section id="skills" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
    <div className="max-w-6xl w-full mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Skills
      </h2>
      
      {/* Skills Categories */}
      <div className="space-y-12">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-300">
              {category}
            </h3>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:bg-[#2a2a2a] transition-colors shadow-lg border border-gray-800"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
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
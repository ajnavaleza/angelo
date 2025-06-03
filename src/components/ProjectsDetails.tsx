import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'SetPlanner.io',
    description: 'Engineered a full-stack web platform that auto-generates DJ setlists based on user-defined genre and artist inputs using AI-driven recommendations.',
    image: '/set.PNG',
    bg: 'bg-gradient-to-br from-indigo-100 to-purple-100',
    tech: [
      { name: 'React', color: 'bg-blue-600' },
      { name: 'Next.js', color: 'bg-purple-500' },
      { name: 'Spotify API', color: 'bg-purple-400' },
    ],
    github: 'https://github.com/ajnavaleza/SetPlanner.io',
    external: 'https://set-planner-io.vercel.app/',
  },
  {
    title: 'Investment Portfolio',
    description: 'Architected a modern full-stack SPA enabling users to track, analyze, and optimize investment portfolios with real-time market data visualization and performance analytics.',
    image: '/project2.jpg',
    bg: 'bg-gradient-to-br from-green-100 to-teal-100',
    tech: [
      { name: 'Angular 16', color: 'bg-green-600' },
      { name: 'TypeScript', color: 'bg-green-400' },
      { name: 'Firebase', color: 'bg-green-700' },
      { name: 'Alpha Vantage API', color: 'bg-green-400' },
    ],
    github: 'https://github.com/ajnavaleza/InvestmentPortfolio',
    external: 'https://investment-portfolio-ten.vercel.app/',
  },
  {
    title: 'Baltimore Ravens Data Analytics Project',
    description: 'Applied statistical modeling and predictive analytics on data for 5,000+ NCAA football players with interactive Power BI and Tableau dashboards.',
    image: '/project3.jpg',
    bg: 'bg-gradient-to-br from-orange-100 to-pink-100',
    tech: [
      { name: 'Python', color: 'bg-orange-600' },
      { name: 'Power BI', color: 'bg-red-500' },
      { name: 'Tableau', color: 'bg-orange-400' },
      { name: 'SQL', color: 'bg-orange-400' }
    ],
    github: 'https://github.com/arbaji22/ravensproject.github.io',
    external: 'https://arbaji22.github.io/arbaji.github.io/',
  },
];

const ProjectsDetails = () => (
  <section id="projects" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
    <div className="max-w-6xl w-full mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
        Projects
      </h2>
      <p className="text-lg text-gray-400 text-center mb-10">
        A showcase of my technical projects and applications.
      </p>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={project.title} className="rounded-xl overflow-hidden shadow-lg bg-[#0a0e17] flex flex-col border border-[#23263a]">
            <Image src={project.image} alt={project.title} width={400} height={224} className="object-cover w-full h-full" />
            <div className={`h-56 w-full ${project.bg} flex items-center justify-center`}>
              {/* Uncomment below and provide real images if available */}
              {/* <Image src={project.image} alt={project.title} width={400} height={224} className="object-cover w-full h-full" /> */}
            </div>
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech.name} className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${tech.color}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsDetails; 
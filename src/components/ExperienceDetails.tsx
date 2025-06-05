import Image from 'next/image';

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
    bgColor: 'bg-purple-800',
    textColor: 'text-white'
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
    logo: 'H',
    logoType: 'text',
    bgColor: 'bg-orange-500',
    textColor: 'text-white'
  }
  
];

const ExperienceDetails = () => (
  <section id="experience" className="scroll-mt-16 w-full py-20 px-4 md:px-0 flex flex-col items-center bg-transparent">
    <div className="max-w-4xl w-full mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Experience
      </h2>
      <p className="text-lg text-gray-400 text-center mb-10">
      </p>
      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600"></div>
        
        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Dot/Logo */}
              <div className={`flex-shrink-0 w-12 h-12 ${exp.bgColor} ${exp.textColor} rounded-full flex items-center justify-center font-bold text-sm z-10 overflow-hidden`}>
                {exp.logoType === 'image' ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : (
                  exp.logo
                )}
              </div>
              
              {/* Content */}
              <div className="ml-6 bg-[#181c2a] rounded-lg p-6 flex-1 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.position} @ {exp.company} - {exp.location}
                </h3>
                <div className="text-gray-400 text-sm mb-3">{exp.date}</div>
                <div className="text-gray-300">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, i) => (
                      <div key={i} className="mb-1">{item}</div>
                    ))
                  ) : (
                    <div>{exp.description}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceDetails;
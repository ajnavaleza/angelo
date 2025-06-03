// components/About.tsx
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import SectionWrapper from "./SectionWrapper";
import Image from 'next/image';

const About = () => (
  <SectionWrapper id="about" title="">
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="flex justify-center mb-6">
        <Image
          src="/web.jpg"
          alt="Angelo"
          width={400}
          height={400}
          className="rounded-full shadow-lg object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Angelo.</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <a
          href="https://drive.google.com/file/d/1nUwCYxzNlTv2WN5ujiWzYvAg9BQev_b2/view?usp=drive_link"
          download
          className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
        >
          <Download size={20} className="mr-2" />
          Download CV
        </a>
        <a
          href="#projects"
          className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 dark:border-gray-500 shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          View My Work
        </a>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <a href="https://github.com/ajnavaleza" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-pink-500 transition-colors">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/angelo-navaleza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-pink-500 transition-colors">
          <Linkedin size={28} />
        </a>
        <a href="mailto:aj.navaleza@gmail.com" aria-label="Email Me" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-pink-500 transition-colors">
          <Mail size={28} />
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default About;

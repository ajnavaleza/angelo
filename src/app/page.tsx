// App.tsx or HomePage.tsx
import About from "../components/About";
import Skills from "../components/SkillsDetails";
import Experience from "../components/ExperienceDetails";
import Projects from "../components/ProjectsDetails";

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}

export default App; 
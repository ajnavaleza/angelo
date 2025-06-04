// App.tsx or HomePage.tsx
import About from "../components/About";
import Skills from "../components/SkillsDetails";
import Experience from "../components/ExperienceDetails";
import Projects from "../components/ProjectsDetails";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Analytics />
    </main>
  );
}

export default App; 
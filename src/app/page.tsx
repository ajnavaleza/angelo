// App.tsx or HomePage.tsx
import About from "../components/About";
import Skills from "../components/SkillsDetails";
import Experience from "../components/ExperienceDetails";
import Projects from "../components/ProjectsDetails";
import FloatingElements from "../components/FloatingElements";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <main className="bg-gray-900 text-white font-sans relative">
      <FloatingElements />
      <div className="relative z-10">
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
      </div>
      <Analytics />
    </main>
  );
}

export default App; 
// App.tsx or HomePage.tsx
import About from "../components/About";
import Skills from "../components/SkillsDetails";
import Experience from "../components/ExperienceDetails";
import Projects from "../components/ProjectsDetails";
import CursorGradient from "../components/CursorGradient";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <main className="text-white font-sans relative min-h-screen">
      <CursorGradient />
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
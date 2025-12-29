import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ConstellationScene from './components/canvas/ConstellationScene';
import GalaxyArms from './components/canvas/GalaxyArms';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import './styles/globals.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  // Handle Theme Side Effects
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* 3D Background Scene - Theme Aware */}
      <ConstellationScene isDark={isDark} />

      {/* Main Content */}
      <Layout isDark={isDark} toggleTheme={toggleTheme}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
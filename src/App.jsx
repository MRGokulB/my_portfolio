import Layout from './components/Layout';
import Scene from './components/canvas/Scene';
import GalaxyArms from './components/canvas/GalaxyArms';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import './styles/globals.css';

function App() {
  return (
    <>
      {/* 3D Background Scene */}
      <Scene /> 
       {/*   <GalaxyArms /> */}
      
      {/* Main Content */}
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
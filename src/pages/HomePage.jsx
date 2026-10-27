import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
};

export default HomePage;

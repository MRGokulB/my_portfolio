import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';

const AboutPage = () => {
    return (
        <div className="flex flex-col w-full">
            <About />
            <Skills />
            <Education />
        </div>
    );
};

export default AboutPage;

import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <Experience />
        </div>
    );
};

export default HomePage;

import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Projects from '../components/sections/Projects';
import AboutPreview from '../components/sections/AboutPreview';
import Experience from '../components/sections/Experience';
import ContactBanner from '../components/ContactBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Projects />
      <AboutPreview />
      <Experience />
      <ContactBanner />
    </>
  );
}

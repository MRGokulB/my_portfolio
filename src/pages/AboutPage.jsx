import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import ContactBanner from '../components/ContactBanner';

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills showAboutLink={false} />
      <Education />
      <ContactBanner />
    </>
  );
}

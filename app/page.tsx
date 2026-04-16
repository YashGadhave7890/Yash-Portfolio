import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Internship from '@/components/sections/Internship';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Blog from '@/components/sections/Blog';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Internship />
      <Projects />
      <Skills />
      <Blog />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

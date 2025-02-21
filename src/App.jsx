import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ParticlesBackground from "./components/ParticlesBackground"; 
import Certification from "./components/Certifications";  

export default function App() {
  return (
    <div className=" min-h-screen">
      <ParticlesBackground /> {/* Particles in the background */}
      <div className="relative z-10"> {/* Ensures content is above particles */}
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

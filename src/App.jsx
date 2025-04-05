import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certification from "./components/Certifications";  
import Loader from "./components/Loader";
import { useState, useEffect, useRef } from "react";
import Loader2 from "./components/Loader2";

export default function App() {
  const [loading, setLoading] = useState(true);
  const vantaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!loading) {
      const vantaEffect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, [loading]);
  return (
    <div className="min-h-screen">
      {loading ? (
        <Loader2 />
      ) : (
        <>
          {/* Vanta Background */}
          <div 
            ref={vantaRef} 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <Skills />
            <Portfolio />
            <Experience />
            <Certification />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

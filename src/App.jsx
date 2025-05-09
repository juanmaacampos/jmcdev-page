import { useEffect, useState, useRef } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Header from "./websections/Header/Header";
import Navbar from "./websections/Navbar/Navbar";
import Footer from "./websections/footer/Footer";
import './App.css';
// import Svg from "./components/Svg/Svg"; // Not used in this simplified version
import Servicios from "./websections/Servicios/Servicios";
// import VideoSection from "./websections/VideoSection/VideoSection"; // No longer directly used here
import Proceso from "./websections/Proceso/Proceso";
import Planes from "./websections/Planes/Planes";
import Portafolio from "./websections/Portafolio/Portafolio";
import Testimonios from "./websections/Testimonios/Testimonios";
import Contacto from "./websections/Contacto/Contacto";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import VideoMaskEffect from "./components/VideoMaskEffect/VideoMaskEffect"; // Import the new component

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const videoSectionRef = useRef(null); 
  const videoOverlayRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setContentVisible(true);
        setTimeout(() => {
          ScrollTrigger.refresh();
          console.log("ScrollTrigger refreshed after content visible.");
        }, 100); // Increased delay slightly
      }, 100); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    gsap.ticker.add(lenis.raf, lenis);
    gsap.ticker.lagSmoothing(0);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <LoaderDiagonal isVisible={loading} />
      
      <div className={`contenido ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <Header />
        <Servicios id="servicios" />
        <VideoMaskEffect 
          videoSectionRef={videoSectionRef} 
          videoOverlayRef={videoOverlayRef} 
          contentVisible={contentVisible} 
        />
        
          <Proceso /> 
        <Planes />
        <Portafolio />
        <Testimonios />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;

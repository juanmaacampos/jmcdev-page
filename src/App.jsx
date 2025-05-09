import { useEffect, useState, useRef } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Header from "./websections/Header/Header";
import Navbar from "./websections/Navbar/Navbar";
import Footer from "./websections/footer/Footer";
import './App.css';
// import Svg from "./components/Svg/Svg"; // Not used in this simplified version
import Servicios from "./websections/Servicios/Servicios";
import VideoSection from "./websections/VideoSection/VideoSection";
import Proceso from "./websections/Proceso/Proceso";
import Planes from "./websections/Planes/Planes";
import Portafolio from "./websections/Portafolio/Portafolio";
import Testimonios from "./websections/Testimonios/Testimonios";
import Contacto from "./websections/Contacto/Contacto";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

// CRITICAL MASK CHANGE: 
// For "video INSIDE logo" (Apple M4 style) & "shrink from outside-in to fill video":
// JmcDevLogoMaskPath (logoeffect.svg) MUST be: A TRANSPARENT logo shape defined within an SVG,
// typically on an OPAQUE background if the SVG itself defines a viewport, or the SVG path itself is the mask.
// The TRANSPARENT shape should ideally fill its canvas/viewBox in logoeffect.svg for the "fill video resolution" effect.
// The OPAQUE background of the SVG should extend to the edges of its viewBox.

// FOR MASK QUALITY: Using an SVG mask (logoeffect.svg) is excellent for crisp, scalable edges.
import JmcDevLogoMaskPath from './assets/images/logoeffect.svg'; // UPDATED to .svg - This is your MASK image (stencil)

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

  useEffect(() => {
    let videoTl; 

    if (
      contentVisible && 
      videoSectionRef.current && 
      videoOverlayRef.current &&
      videoSectionRef.current.offsetHeight > 0 
    ) {
      const videoSectionElement = videoSectionRef.current; 
      const actualVideoOverlayElement = videoOverlayRef.current; 
      
      console.log("GSAP Initializing for VideoSection. Height:", videoSectionElement.offsetHeight);
      
      gsap.set(actualVideoOverlayElement, { 
        opacity: 1, 
        backgroundColor: '#000000', 
        webkitMaskImage: `url(${JmcDevLogoMaskPath})`,
        webkitMaskRepeat: 'no-repeat',
        webkitMaskPosition: 'center center', 
        webkitMaskSize: '6300vw 6300vh', 
        maskImage: `url(${JmcDevLogoMaskPath})`, 
        maskRepeat: 'no-repeat',
        maskPosition: 'center center',
        maskSize: '6300vw 6300vh', 
      });

      const animationScrollDuration = window.innerHeight * 0.75; 
      const holdScrollDuration = window.innerHeight * 0.5; 

      videoTl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSectionElement, 
          start: "top top", 
          end: `+=${animationScrollDuration + holdScrollDuration}`, 
          scrub: 1.2, 
          pin: true,
          markers: true, 
          pinSpacing: true, 
        }
      });
      
      // Animate the mask size from EXTREMELY HUGE down.
      // Target '105% 105%' to ensure the opaque parts of the SVG mask
      // slightly overshoot the container, hiding any video spill at the edges.
      videoTl.to(actualVideoOverlayElement, { 
          webkitMaskSize: '105% 105%', // Target: mask image slightly larger than the overlay
          maskSize: '105% 105%',       // This helps cover edges completely.
          ease: "power1.inOut" 
        }, 0); 

      return () => {
        if (videoTl) videoTl.kill();
        ScrollTrigger.getAll().forEach(st => {
            if (st.trigger === videoSectionElement) {
                st.kill();
            }
        });
        gsap.set(actualVideoOverlayElement, { clearProps: "all" });
        console.log("GSAP cleanup for VideoSection.");
      };
    } else if (contentVisible && videoSectionRef.current && videoSectionRef.current.offsetHeight === 0) {
      console.warn("VideoSection has 0 height when GSAP effect attempted. Refreshing ST again.");
      setTimeout(() => ScrollTrigger.refresh(), 100); 
    }
  }, [contentVisible]); 

  return (
    <>
      <LoaderDiagonal isVisible={loading} />
      
      <div className={`contenido ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <Header />
        <Servicios id="servicios" />
        <VideoSection ref={videoSectionRef} overlayRef={videoOverlayRef} /> 
        
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

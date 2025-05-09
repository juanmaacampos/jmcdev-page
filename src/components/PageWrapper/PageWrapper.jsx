import React, { useState, useEffect } from 'react';
import LoaderDiagonal from '../Loader/Loader'; // Adjusted path
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import './PageWrapper.css';

gsap.registerPlugin(ScrollTrigger);

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setContentVisible(true);
        setTimeout(() => {
          ScrollTrigger.refresh();
          console.log("ScrollTrigger refreshed after content visible.");
        }, 100);
      }, 100); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 0.4, 
      smoothWheel: true, 
      smoothTouch: true, // Enable for better touch feel
      // syncTouch: true, // Disabled as it caused issues
      touchMultiplier: 0.8, // Moderate value for slower touch scroll, adjust between 0.5-0.8
    });
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
        {children(contentVisible)}
      </div>
    </>
  );
}

export default PageWrapper;

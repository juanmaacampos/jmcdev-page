import React, { useState, useEffect, useRef } from 'react';
import styles from './CoolTitle.module.css';

function CoolTitle({ children, className, animation = 'none', hoverFonts = [], fontTransition = "0.5s" }) {
  const [fontIndex, setFontIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 900;
  const lastScroll = useRef(0);

  useEffect(() => {
    if (!isMobile || hoverFonts.length === 0) return;

    const handleScroll = () => {
      // Cambia de fuente solo si se scrollea más de 40px desde el último cambio
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScroll.current) > 40) {
        setTransitioning(true);
        setTimeout(() => setTransitioning(false), parseFloat(fontTransition) * 1000);
        setFontIndex(prev => (prev + 1) % hoverFonts.length);
        lastScroll.current = scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, hoverFonts.length, fontTransition]);

  const handleMouseEnter = () => {
    if (!isMobile && hoverFonts.length > 0) {
      setTransitioning(true);
      setTimeout(() => setTransitioning(false), parseFloat(fontTransition) * 1000);
      setFontIndex((prev) => (prev + 1) % hoverFonts.length);
    }
  };

  const fontFamily = hoverFonts.length > 0 ? { fontFamily: hoverFonts[fontIndex] } : {};

  return (
    <h1
      className={`${styles.title} ${styles[animation]} ${className || ''} ${transitioning ? styles.fontTransitioning : ''}`}
      data-text={children}
      style={{
        ...fontFamily,
        transition: `font-family ${fontTransition} cubic-bezier(0.4,0,0.2,1), color 0.2s, background 0.2s`
      }}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </h1>
  );
}

export default CoolTitle;

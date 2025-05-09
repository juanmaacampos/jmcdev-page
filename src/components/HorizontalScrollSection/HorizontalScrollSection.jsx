import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Proceso from '../../websections/Proceso/Proceso';
import Planes from '../../websections/Planes/Planes';
import styles from './HorizontalScrollSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = ({ contentVisible }) => {
  const componentRef = useRef(null);
  const containerRef = useRef(null); // For horizontal sliding of all panels
  const procesoContentActualRef = useRef(null); // Inner div wrapping Proceso for height measurement
  const procesoPanelScrollWrapperRef = useRef(null); // The 100vh panel that Proceso's content "scrolls" within

  const [procesoFullHeight, setProcesoFullHeight] = useState(0);

  useEffect(() => {
    // Measure Proceso's actual content height when content is visible or ref is available
    if (contentVisible && procesoContentActualRef.current) {
      setProcesoFullHeight(procesoContentActualRef.current.scrollHeight);
    }
  }, [contentVisible, procesoContentActualRef.current]); // Rerun if contentVisible or ref changes

  useEffect(() => {
    // Ensure all refs and necessary data are available
    if (contentVisible && componentRef.current && containerRef.current && procesoPanelScrollWrapperRef.current && procesoFullHeight > 0) {
      
      // Calculate how much Proceso's content needs to "scroll" internally
      const procesoInternalScrollNeeded = Math.max(0, procesoFullHeight - window.innerHeight);
      
      // The width to slide horizontally (assuming Planes is one panel width)
      const horizontalSlideWidth = window.innerWidth; 

      // Total duration of the pin in terms of page scroll distance
      // It's the sum of distance needed for Proceso's content + distance for horizontal slide
      const totalPinScrollDuration = procesoInternalScrollNeeded + window.innerHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${totalPinScrollDuration}`,
          invalidateOnRefresh: true, // Recalculate on resize/refresh
        }
      });

      // Part 1: Animate scrollTop of Proceso's wrapper if its content is taller than viewport
      if (procesoInternalScrollNeeded > 0) {
        tl.to(procesoPanelScrollWrapperRef.current, {
          scrollTop: procesoInternalScrollNeeded, // Scroll to the bottom of Proceso's content
          ease: "none"
        });
      }

      // Part 2: Animate horizontal slide to bring Planes into view
      // This animation starts after the previous one (if it exists) completes.
      tl.to(containerRef.current, {
        x: `-${horizontalSlideWidth}px`, // Slide one panel width to the left
        ease: "none"
      }, procesoInternalScrollNeeded > 0 ? ">" : 0); // ">" starts after previous tween. If no internal scroll, starts at 0.
      
      return () => {
        tl.kill();
        // Reset scrollTop when component unmounts or effect re-runs
        if (procesoPanelScrollWrapperRef.current) {
          procesoPanelScrollWrapperRef.current.scrollTop = 0;
        }
      };
    }
  }, [contentVisible, procesoFullHeight]); // Rerun if visibility or measured height changes

  return (
    <div ref={componentRef} className={styles.componentWrapper}>
      <div ref={containerRef} className={styles.horizontalContainer}>
        {/* Panel 1: Proceso */}
        <section className={styles.panel}>
          <div ref={procesoPanelScrollWrapperRef} className={styles.procesoPanelScrollWrapper}>
            {/* This inner div is for measuring Proceso's true content height */}
            <div ref={procesoContentActualRef}> 
              <Proceso contentVisible={contentVisible} />
            </div>
          </div>
        </section>
        {/* Panel 2: Planes */}
        <section className={styles.panel}>
          <div className={styles.planesPanelContent}> {/* Basic wrapper for Planes */}
            <Planes />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;

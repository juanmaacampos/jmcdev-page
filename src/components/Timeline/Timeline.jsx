import React, { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";
// AOS is not directly initialized or refreshed here, but items might use data-aos attributes.
// If AOS.refreshHard() is needed specifically for items within Timeline due to its own visibility changes,
// it would need to be handled, but for now, Proceso.jsx handles the broader refresh.

export default function Timeline({ items }) {
  const gridRef = useRef(null);
  const [isTimelineActive, setIsTimelineActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineActive(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // 10% of the element is visible
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      ref={gridRef}
      className={`${styles.pasosGrid} ${isTimelineActive ? styles.timelineActive : ''}`}
    >
      {items.map((item, index) => (
        <div className={styles.pasoItemContainer} key={index}>
          <div
            className={styles.pasoCard}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 150}
            data-aos-offset="100"
          >
            <span className={styles.borderEffectSpan}></span> {/* For Right and Bottom lines */}
            <span className={styles.borderEffectSpanLeft}></span> {/* For Left line */}
            <div className={styles.pasoTituloContainer}>
              {item.icon && <span className={styles.pasoIcon}>{item.icon}</span>}
              <h4>{item.titulo}</h4>
            </div>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

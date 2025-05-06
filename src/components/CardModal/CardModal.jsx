import React, { useState, useCallback, useEffect } from "react";
import styles from "./CardModal.module.css";
import Button from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardModal({ 
  open, 
  onClose, 
  title, 
  subtitle, 
  description, 
  image, 
  tabs,
  headerAnimation = "fade-down",
  contentAnimation = "fade-up",
  tabsAnimation = "fade-right",
  animationDelay = 100 
}) {
  const [selected, setSelected] = useState(0);

  const handleOverlayClick = useCallback((e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.darkModalCard}>
        <div 
          className={styles.modalHeader}
          data-aos={headerAnimation}
          data-aos-delay={animationDelay}
        >
          {image && <img src={image.src} alt={image.alt} className={styles.coverImage} />}
          <div className={styles.headerGradient}>
            <div className={styles.headerContent}>
              <div className={styles.subtitle}>{subtitle}</div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        
        <div className={styles.modalContent}>
          <div 
            className={styles.tabsSection}
            data-aos={tabsAnimation}
            data-aos-delay={animationDelay + 100}
          >
            {tabs.map((tab, idx) => (
              <Button
                key={tab.label}
                label={tab.label}
                icon={tab.icon}
                effect="neon"
                size="medium"
                variant={selected === idx ? "primary" : "text"}
                onClick={() => setSelected(idx)}
                className={`${styles.tabButton} ${selected === idx ? styles.tabSlideIn : ''}`}
                fullWidth
              />
            ))}
          </div>
          <div 
            className={styles.tabContentSection}
            data-aos={contentAnimation}
            data-aos-delay={animationDelay + 200}
          >
            <div key={selected} className={styles.contentFade}>
              {tabs[selected].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

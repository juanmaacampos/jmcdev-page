import React, { useState } from "react";
import styles from "./ServicioCard.module.css";
import CoolTitle from "../CoolTitle/CoolTitle";

export default function ServicioCard({ icon, svg, titulo, descripcion, modalData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.servicioCard} ${flipped ? styles.flipped : ""}`}
      tabIndex={0}
      role="button"
      style={{ cursor: "pointer" }}
      onClick={() => setFlipped(f => !f)}
      onBlur={() => setFlipped(false)}
    >
      <div className={styles.cardInner}>
        {/* Frente */}
        <div className={styles.cardFront}>
          <div className={styles.iconSvgWrapper}>
            {/* SVG/Icono con tamaño controlado */}
            {svg
              ? React.cloneElement(svg, {
                  style: {
                    width: "48px",
                    height: "48px",
                    maxWidth: "48px",
                    maxHeight: "48px",
                    minWidth: "48px",
                    minHeight: "48px",
                    display: "block",
                    margin: "0 auto"
                  }
                })
              : icon}
          </div>
          <h3 className={styles.cardTitle}>{titulo}</h3>
          <p className={styles.cardDescription}>{descripcion}</p>
        </div>
        {/* Dorso */}
        <div className={styles.cardBack}>
          {/* No renderizar icono aquí */}
          {modalData?.image && (
            <img src={modalData.image.src} alt={modalData.image.alt} className={styles.coverImage} />
          )}
          <div className={styles.headerContent}>
            {modalData?.subtitle && <div className={styles.subtitle}>{modalData.subtitle}</div>}
            <CoolTitle
              className={styles.title}
              animation="slide"
              fontTransition="0.4s"
            >
              {modalData?.title}
            </CoolTitle>
            <p className={styles.description}>{modalData?.description}</p>
          </div>
          {modalData?.tabs && modalData.tabs.length > 0 && (
            <div className={styles.cardBackTabs}>
              {modalData.tabs.map((tab, i) => (
                <div key={i} className={styles.cardBackTab}>
                  {tab.icon && <span className={styles.cardBackTabIcon}>{tab.icon}</span>}
                  <span className={styles.cardBackTabLabel}>{tab.label}</span>
                  <div className={styles.cardBackTabContent}>{tab.content}</div>
                </div>
              ))}
            </div>
          )}
          <button
            className={styles.cardBackClose}
            onClick={e => { e.stopPropagation(); setFlipped(false); }}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
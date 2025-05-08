import React, { useState } from "react";
import styles from "./ServicioCard.module.css";
import CoolTitle from "../CoolTitle/CoolTitle";
import { generateSchemaMarkup } from '../../utils/seo';

export default function ServicioCard({ icon, svg, titulo, descripcion, modalData }) {
  const [flipped, setFlipped] = useState(false);

  const serviceSchema = generateSchemaMarkup('Service', {
    name: titulo,
    description: descripcion,
    provider: {
      "@type": "Organization",
      "name": "JMCdev"
    }
  });

  return (
    <article 
      className={`${styles.servicioCard} ${flipped ? styles.flipped : ""}`}
      tabIndex={0}
      role="button"
      style={{ cursor: "pointer" }}
      onClick={() => setFlipped(f => !f)}
      onBlur={() => setFlipped(false)}
      itemScope 
      itemType="https://schema.org/Service"
    >
      <script type="application/ld+json">{serviceSchema}</script>
      <div className={styles.cardInner}>
        {/* Frente */}
        <div className={styles.cardFront}>
          <div className={styles.iconSvgWrapper}>
            {/* Renderiza el SVG o el icono directamente */}
            {svg ? svg : icon}
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
    </article>
  );
}
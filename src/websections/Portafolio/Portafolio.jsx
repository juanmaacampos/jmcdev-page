import React from "react";
import styles from "./Portafolio.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
// import Card from "../../src/components/Card/Card"; // Eliminado
import Button from "../../components/Button/Button";

const proyectos = [
  {
    title: "Landing para Startup",
    subtitle: "React + Animaciones",
    content: "Sitio moderno y animado para captar leads.",
    image: { src: "/src/assets/images/ejemplo1.png", alt: "Landing Startup" },
    actions: [<Button key="1" label="Ver" to="#" size="small" />],
  },
  {
    title: "E-commerce",
    subtitle: "Next.js + Stripe",
    content: "Tienda online con pagos integrados.",
    image: { src: "/src/assets/images/ejemplo2.png", alt: "E-commerce" },
    actions: [<Button key="2" label="Ver" to="#" size="small" />],
  },
];

export default function Portafolio() {
  return (
    <section className={styles.portafolioSection} id="portafolio">
      <CoolTitle className={styles.titulo}>Proyectos recientes</CoolTitle>
      <div className={styles.grid}>
        {proyectos.map((p, i) => (
          <div key={i} className={styles.projectCard}>
            <img src={p.image.src} alt={p.image.alt} className={styles.projectImage} />
            <h3>{p.title}</h3>
            <h4>{p.subtitle}</h4>
            <p>{p.content}</p>
            <div>{p.actions}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

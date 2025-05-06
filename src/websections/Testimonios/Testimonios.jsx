import React from "react";
import styles from "./Testimonios.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";

const testimonios = [
  {
    nombre: "Ana G.",
    texto: "¡Excelente trabajo! Mi web quedó increíble y aumentaron mis ventas.",
  },
  {
    nombre: "Carlos P.",
    texto: "Muy profesionales y atentos. Recomiendo 100%.",
  },
];

export default function Testimonios() {
  return (
    <section className={styles.testimoniosSection} id="testimonios">
      <CoolTitle className={styles.titulo}>Testimonios</CoolTitle>
      <div className={styles.grid}>
        {testimonios.map((t, i) => (
          <div className={styles.testimonioCard} key={i}>
            <p className={styles.texto}>"{t.texto}"</p>
            <span className={styles.nombre}>- {t.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

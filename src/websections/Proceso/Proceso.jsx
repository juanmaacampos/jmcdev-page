import React from "react";
import styles from "./Proceso.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";

const pasos = [
  { titulo: "1. Consulta", desc: "Hablamos sobre tu idea y necesidades." },
  { titulo: "2. Propuesta", desc: "Te enviamos una propuesta personalizada." },
  { titulo: "3. Desarrollo", desc: "Creamos tu web y te mostramos avances." },
  { titulo: "4. Lanzamiento", desc: "Publicamos tu web y te acompañamos." },
];

export default function Proceso() {
  return (
    <section className={styles.procesoSection} id="proceso">
      <CoolTitle  animation= "fade" className={styles.titulo}>¿Cómo trabajamos?</CoolTitle>
      <div className={styles.pasosGrid}>
        {pasos.map((p, i) => (
          <div className={styles.pasoCard} key={i}>
            <h4>{p.titulo}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

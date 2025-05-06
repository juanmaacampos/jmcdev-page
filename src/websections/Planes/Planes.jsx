import React from "react";
import styles from "./Planes.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import Button from "../../components/Button/Button";

const planes = [
  {
    nombre: "Básico",
    precio: "$120.000",
    descripcion: "Landing page profesional, diseño responsivo, 1 sección.",
    beneficios: [
      "Dominio y hosting 1 año",
      "Soporte básico",
      "Entrega rápida"
    ],
  },
  {
    nombre: "Emprededor",
    precio: "$180.000",
    descripcion: "Sitio multipágina, hasta 4 secciones, formulario de contacto.",
    beneficios: [
      "Dominio y hosting 1 año",
      "SEO inicial",
      "Soporte prioritario"
    ],
    destacado: true,
  },
  {
    nombre: "Premium",
    precio: "$250.000",
    descripcion: "Web avanzada, animaciones, integración con redes y analytics.",
    beneficios: [
      "Dominio y hosting 1 año",
      "SEO avanzado",
      "Soporte premium"
    ],
  },
];

export default function Planes() {
  return (
    <section className={styles.planesSection} id="planes">
      <CoolTitle className={styles.titulo}>Planes para cada necesidad</CoolTitle>
      <div className={styles.grid}>
        {planes.map((plan, i) => (
          <div
            className={`${styles.planCard} ${plan.destacado ? styles.destacado : ""}`}
            key={i}
          >
            <h3>{plan.nombre}</h3>
            <div className={styles.precio}>{plan.precio}</div>
            <p className={styles.descripcion}>{plan.descripcion}</p>
            <ul>
              {plan.beneficios.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <Button label="Me interesa" effect="neon" size="medium" to="#contacto" />
          </div>
        ))}
      </div>
    </section>
  );
}

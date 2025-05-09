import React from "react";
import styles from "./Planes.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
// Button import is no longer directly needed here if Card3D handles its own button
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import Card3D from "../../components/PlanesCard3d/3dCard"; // Import the new 3D card

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
      <ParticleBackground />
      <CoolTitle className={styles.titulo}>Planes para cada necesidad</CoolTitle>
      <div className={styles.grid}>
        {planes.map((plan, i) => (
          <Card3D
            key={i}
            plan={plan}
            destacado={plan.destacado}
          />
        ))}
      </div>
    </section>
  );
}

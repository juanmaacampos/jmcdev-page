import React, { useRef } from "react";
import styles from "./Portafolio.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import ProyectoCard from "../../components/ProyectoCard/ProyectoCard";
import ParticleBackground from "../../components/ParticleBackground/ParticleBackground";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

// Datos de ejemplo para los proyectos (assuming this remains the same)
const proyectos = [
  {
    id: 1,
    imagen: "/src/assets/projects_img/image.png", 
    titulo: "Mi portafolio Personalizado",
    descripcion: "Portafolio Moderno ideal para mostrar tus habilidades y proyectos!.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    projectLink: "https://juanmaacampos.github.io/juanmacampos-portfolio/",
  },
  {
    id: 2,
    imagen: "/src/assets/images/proyecto_placeholder_2.webp",
    titulo: "Plataforma Beta",
    descripcion: "Plataforma innovadora para la gestión de tareas y colaboración en equipo.",
    tecnologias: ["Vue.js", "Firebase", "TailwindCSS"],
    projectLink: "https://ejemplo.com/beta",
  },
  {
    id: 3,
    imagen: "/src/assets/images/proyecto_placeholder_3.webp",
    titulo: "E-commerce Gamma",
    descripcion: "Tienda online completa con carrito de compras, pagos y gestión de inventario.",
    tecnologias: ["Next.js", "Stripe", "PostgreSQL"],
    projectLink: "https://ejemplo.com/gamma",
  },
];

export default function Portafolio() {
  const splideRef = useRef(null);

  const splideOptions = {
    type: 'loop',
    focus: 'center',
    autoWidth: true,
    gap: '40px', // Más espacio para cards más anchas
    pagination: false, // Oculta paginación por defecto
    arrows: false, // Oculta flechas por defecto (las pondremos abajo)
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
      1024: {
        gap: '30px',
      },
      768: {
        gap: '20px',
      },
      480: {
        gap: '10px',
      },
    },
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('<');
    }
  };

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('>');
    }
  };

  return (
    <section className={styles.portafolioSection} id="portafolio">
      <ParticleBackground />
      <CoolTitle className={styles.titulo}>Proyectos recientes</CoolTitle>
      <div className={styles.splideContainer}>
        <Splide
          options={splideOptions}
          aria-label="Proyectos recientes"
          className={styles.mySplide}
          ref={splideRef}
        >
          {proyectos.map((proyecto) => (
            <SplideSlide key={proyecto.id} className={styles.splideSlideItem}>
              <div className={styles.customCardWidth}>
                <ProyectoCard
                  imagen={proyecto.imagen}
                  titulo={proyecto.titulo}
                  descripcion={proyecto.descripcion}
                  tecnologias={proyecto.tecnologias}
                  projectLink={proyecto.projectLink}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <div className={styles.splideControls}>
          <button className={`${styles.splideArrow} ${styles.splideArrowPrev}`} type="button" aria-label="Anterior" onClick={goPrev}>
            &#8592;
          </button>
          <button className={`${styles.splideArrow} ${styles.splideArrowNext}`} type="button" aria-label="Siguiente" onClick={goNext}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

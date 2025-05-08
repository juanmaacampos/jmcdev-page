import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Servicios.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import { FaShare } from "react-icons/fa";
import ServicioCard from "../../components/ServicioCard/ServicioCard";
import Svg from "../../components/Svg/Svg";
import MachineTypeTitle from "../../components/MachineTypeTitle/MachineTypeTitle";

// --- IMPORTA LOS ASSETS ---
import lottieWorld from "../../assets/images/modals_assets/world.json";
import lottieSocial from "../../assets/images/modals_assets/social.json";
import lottieCamera from "../../assets/images/modals_assets/camera.json";
import lottieDesign from "../../assets/images/modals_assets/design.json";
import lottieHosting from "../../assets/images/modals_assets/hosting.json";
import lottieSupport from "../../assets/images/modals_assets/support.json";

import imgDesarrolloWeb from "../../assets/images/modals_assets/desarrollo_web.png";
import imgRedes from "../../assets/images/modals_assets/redes.webp";
import imgCamera from "../../assets/images/modals_assets/camera.png";
import imgDiseno from "../../assets/images/modals_assets/diseño.jpg";
import imgHosting from "../../assets/images/modals_assets/hosting.webp";
import imgMantenimiento from "../../assets/images/modals_assets/mantenimiento.png";

import parallaxVideo from "../../assets/images/parallax_servicio.mp4";
import parallaxPoster from "../../assets/images/parallax_service.png";

export default function Servicios() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [maskActive, setMaskActive] = useState(false); // Nuevo estado
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
      setMaskActive(true); // Activa la máscara
    };
    const handleMouseLeave = () => {
      setCursor((c) => ({ ...c, visible: false }));
      setMaskActive(false); // Desactiva la máscara
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      className={styles.serviciosSection}
      id="servicios"
      ref={sectionRef}
    >
      {/* Fondo parallax con video y máscara circular */}
      <div className={styles.parallaxBackground}>
        <div
          className={styles.videoRevealMask}
          style={
            cursor.visible
              ? {
                  WebkitMaskImage: `radial-gradient(circle 120px at ${cursor.x}px ${cursor.y}px, white 90%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 300px at ${cursor.x}px ${cursor.y}px, white 90%, transparent 100%)`,
                  pointerEvents: "none",
                }
              : {
                  WebkitMaskImage: "none",
                  maskImage: "none",
                  opacity: 0,
                  pointerEvents: "none",
                }
          }
        >
          <video
            className={styles.parallaxVideo}
            src={parallaxVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={parallaxPoster}
          />
          <img 
            src={parallaxPoster}
            alt="Background"
            className={styles.parallaxImage}
          />
        </div>
      </div>

      {/* Titulo con efectos ---------------------------------------------------------------------------*/}

      <CoolTitle
        className={`${styles.titulo} ${maskActive ? styles.tituloMaskActive : ""}`}
        hoverFonts={[
          "'Geologica','Orbitron', sans-serif",
          "'Rajdhani', 'DM Sans', sans-serif",
          "'Exo', 'Arial Rounded MT Bold', sans-serif",
          "'Share Tech Mono', 'Montserrat', monospace"
        ]}
        fontTransition="0.5s"
        maskActive={maskActive} 
      >
Transformamos <CoolTitle>tu presencia digital</CoolTitle> 
</CoolTitle>

      {/* Cards y sus Modals ----------------------------------------------------------------------------*/}

      <div className={styles.serviciosGrid}>

    {/*  -----------------------DESARROLLO WEB CARD------------------------------------*/}

<div data-aos="fade-up" data-aos-delay="100" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieWorld} />}
    titulo="Creación de páginas web que venden"
    descripcion="Diseñamos sitios modernos desde cero, optimizados para destacar en Google y convertir visitas en clientes."
    modalData={{
      title: <h1>Estar en Google es vender.</h1>,
      description: "Tenés una marca, querés crecer. Necesitás una web que aparezca entre los primeros resultados cuando te buscan.",
      image: { src: imgDesarrolloWeb, alt: "Desarrollo Web" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Posicionate entre los primeros resultados</h3></li>
              <p>Diseñamos cada línea de código pensando en el buscador de Google, para que tu negocio no solo esté online… esté visible.</p>
              <li><h4>¿Por qué importa esto?</h4></li>
              <p>Porque cuando alguien busca un restaurante, peluquería o cualquier servicio, no entra a redes. Lo busca en Google.  
              Si no estás ahí arriba, no existís.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>

{/*  -----------------------REDES SOCIALES CARD------------------------------------*/}

<div data-aos="fade-up" data-aos-delay="500" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieSocial} />}
    titulo="Potenciación de Redes Sociales"
    descripcion="Impulsamos tu negocio en redes con contenido atractivo, diseño de publicaciones y estrategias para llegar a más público."
    modalData={{
      title: "Conectá tu negocio con más gente",
      description: "Haz que tu marca brille en redes sociales con contenido profesional y estrategias que aumentan tu alcance.",
      image: { src: imgRedes, alt: "Redes Sociales" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Contenido que conecta</h3></li>
              <p>Creamos publicaciones que no solo destacan, sino que generan interacción. Contenido que engancha y convierte.</p>
              <li><h4>¿Por qué es tan importante?</h4></li>
              <p>Las redes sociales son el escenario perfecto para mostrar tu negocio al mundo. Pero <strong>necesitás estrategias bien pensadas </strong> para que tu marca llegue a más personas y se convierta en una referencia.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>

{/*  -----------------------FOTOGRAFÍA CARD------------------------------------*/}

<div data-aos="fade-up" data-aos-delay="200" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieCamera} />}
    titulo="Servicio de Fotografía Profesional"
    descripcion="Capturamos imágenes impresionantes con cámara réflex para que tu negocio tenga fotos visualmente impactantes en tu web y redes sociales."
    modalData={{
      title: "Imágenes que hablan por tu marca",
      description: "Fotos de alta calidad que reflejan la esencia de tu negocio, ideales para tu página web y redes sociales.",
      image: { src: imgCamera, alt: "Fotografía Profesional" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Imágenes que impactan</h3></li>
              <p>Tomamos fotos profesionales con cámara réflex para que tu negocio tenga un impacto visual inmediato. Imágenes que captan atención y dejan huella.</p>
              <li><h4>¿Por qué es importante?</h4></li>
              <p>Las imágenes son la primera impresión de tu marca. <strong>No subestimes el poder de una buena foto</strong>. Una imagen vale más que mil palabras, y en tu negocio, <strong>puede ser la diferencia entre llamar la atención o pasar desapercibido</strong>.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>


{/* -------------------------DISEÑO CARD----------------------------------*/}

<div data-aos="fade-up" data-aos-delay="600" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieDesign} />}
    titulo="Diseños Personalizados desde Cero"
    descripcion="Creamos interfaces únicas, adaptadas a tus necesidades. Nada de plantillas, todo hecho a medida y para que se vea bien en cualquier dispositivo."
    modalData={{
      title: "Diseño que conecta con tu público",
      description: "Diseñamos interfaces atractivas y fáciles de usar, pensadas para que tus usuarios disfruten de una experiencia simple y agradable.",
      image: { src: imgDiseno, alt: "Diseño Personalizado" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Diseños únicos y adaptados a tu marca</h3></li>
              <p>Olvidate de usar plantillas. Creamos cada web desde cero, ajustado a lo que tu negocio necesita.</p>
              <li><h4>¿Por qué elegirnos?</h4></li>
              <p>Un diseño atractivo y fácil de usar hace que tus usuarios disfruten más tu página. Nos aseguramos de que todo se vea perfecto, tanto en computadoras como en teléfonos.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>

        
{/* -----------------------------HOSTING CARD-----------------------------*/}

<div data-aos="fade-up" data-aos-delay="400" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieHosting} />}
    titulo="Hosting y Dominio"
    descripcion="Nos encargamos del alojamiento web y el registro de tu dominio personalizado de manera fácil y sin complicaciones."
    modalData={{
      title: "Tu página siempre online.",
      description: "Te ayudamos con todo el proceso de alojamiento y registro de dominio para que tu página esté siempre disponible y fácil de encontrar.",
      image: { src: imgHosting, alt: "Hosting y Dominio" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Todo en un solo lugar</h3></li>
              <p>Nos encargamos de todo el proceso: desde el alojamiento de tu página web hasta el registro de tu dominio, sin complicaciones.</p>
              <li><h4>¿Por qué elegirnos?</h4></li>
              <p>Con nuestro servicio, tu página estará siempre online, accesible para todos y con un nombre de dominio fácil de recordar.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>


{/* ----------------------------SOPORTE CARD------------------------------------*/}
<div data-aos="fade-up" data-aos-delay="300" className={styles.cardWrapper}>
  <ServicioCard
    svg={<Svg route={lottieSupport} />}
    titulo="Mantenimiento y Soporte Técnico"
    descripcion="Te ofrecemos actualizaciones regulares, corrección de errores y soporte continuo para que tu página siempre esté al día."
    modalData={{
      title: "Tu página siempre a punto.",
      description: "Nos encargamos de mantener tu sitio actualizado, corregir cualquier error y brindarte soporte cuando lo necesites.",
      image: { src: imgMantenimiento, alt: "Soporte Técnico" },
      tabs: [
        {
          label: "",
          icon: <FaShare />,
          content: (
            <ul>
              <li><h3>Todo en orden, siempre</h3></li>
              <p>Nos aseguramos de que tu página esté siempre actualizada, con las últimas funciones y libre de errores.</p>
              <li><h4>¿Por qué es importante?</h4></li>
              <p>Un sitio web sin mantenimiento puede volverse lento o tener errores que afecten la experiencia del usuario. Nosotros nos encargamos de todo para que no tengas que preocuparte.</p>
            </ul>
          ),
        }
      ],
    }}
  />
</div>



      </div>
    </section>
  );
}

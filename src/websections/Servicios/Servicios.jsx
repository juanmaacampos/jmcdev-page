import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Servicios.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaServer, FaShare, FaPaintBrush, FaCode, FaTools, FaCogs } from "react-icons/fa";
import ServicioCard from "../../components/ServicioCard/ServicioCard";
import Svg from "../../components/Svg/Svg";
import MachineTypeTitle from "../../components/MachineTypeTitle/MachineTypeTitle";

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
            src="src/assets/images/parallax_servicio.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="src/assets/images/parallax_service.png"
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
            icon={<Svg route="src/assets/images/modals_assets/world.json" />}
            titulo="Creación de paginas web atractivas"
            descripcion="Creamos sitios web modernos a medida para tu negocio, optimizados para aparecer primero en las busquedas de Google."
            modalData={{
              title: "Creada para llamar algo mas que la atención",
              description: "Desde el principio, tu tienes el control de como quieres tu pagina",
              image: { src: "src/assets/images/modals_assets/desarrollo_web.jpg", alt: "Desarrollo Web" },
              tabs: [
                {
                  label: "¿Qué incluye?",
                  content: (
                    <ul>
                      <li>Landing pages</li>
                      <li>Webs institucionales</li>
                      <li>Tiendas online</li>
                    </ul>
                  ),
                },
                {
                  label: "Tecnologías",
                  content: (
                    <div>
                      <p>React, Next.js, Node.js, CSS Modules, y más.</p>
                    </div>
                  ),
                },
                {
                  label: "Proceso",
                  content: (
                    <ol>
                      <li>Reunión inicial</li>
                      <li>Prototipado</li>
                      <li>Desarrollo</li>
                      <li>Entrega y soporte</li>
                    </ol>
                  ),
                },
              ],
            }}
          />
        </div>

      {/*  -----------------------REDES SOCIALES CARD------------------------------------*/}


            <div data-aos="fade-up" data-aos-delay="500" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="/src/assets/images/modals_assets/social.json" />}
            titulo="Potenciación de Redes Sociales"
            descripcion="Impulsamos tu negocio en redes con contenido llamativo, diseño de publicaciones y estrategias de para llegar a mas publico"
            modalData={{
              title: "Integración Social",
              description: "Integra tus redes sociales de forma profesional en tu sitio web.",
              image: { src: "src/assets/images/modals_assets/redes.webp", alt: "Redes Sociales" },
              tabs: [
                {
                  label: "Integraciones",
                  icon: <FaShare />,
                  content: (
                    <ul>
                      <li>Feed de Instagram</li>
                      <li>Timeline de Twitter</li>
                      <li>Posts de Facebook</li>
                      <li>Videos de YouTube</li>
                    </ul>
                  ),
                },
                {
                  label: "Funcionalidades",
                  icon: <FaCogs />,
                  content: (
                    <ul>
                      <li>Compartir automático</li>
                      <li>Botones sociales</li>
                      <li>Analytics integrado</li>
                    </ul>
                  ),
                }
              ],
            }}
          />
        </div>

      {/*  -----------------------FOTOGRAFIA CARD------------------------------------*/}

            <div data-aos="fade-up" data-aos-delay="200" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/camera.json" />}
            titulo="Servicio de fotografia profesional"
            descripcion="Fotos profesionales tomadas con camara reflex para usar imagenes visualmente llamativas en tu pagina y redes sociales"
            modalData={{
              title: "Diseño Responsivo",
              description: "Tu página se verá perfecta en cualquier dispositivo, ya sea PC o celular.",
              image: { src: "src/assets/images/modals_assets/responsive.jpg", alt: "Diseño Responsivo" },
              tabs: [
                {
                  label: "Características",
                  icon: <FaMobileAlt />,
                  content: (
                    <ul>
                      <li>Diseño adaptable automático</li>
                      <li>Optimización para móviles</li>
                      <li>Pruebas en múltiples dispositivos</li>
                      <li>Performance optimizada</li>
                    </ul>
                  ),
                },
                {
                  label: "Tecnologías",
                  icon: <FaCode />,
                  content: (
                    <ul>
                      <li>CSS Grid y Flexbox</li>
                      <li>Media Queries</li>
                      <li>Mobile-first approach</li>
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
            icon={<Svg route="src/assets/images/modals_assets/design.json" />}
            titulo="Diseños personalizados desde cero"
            descripcion="Interfaces únicas y optimizadas construidas a partir de lo que quiera el cliente. Desde cero, sin plantillas"
            modalData={{
              title: "Diseño UX/UI",
              description: "Diseñamos interfaces intuitivas y atractivas pensando en tus usuarios.",
              image: { src: "src/assets/images/modals_assets/diseño.jpg", alt: "Diseño UX/UI" },
              tabs: [
                {
                  label: "Proceso",
                  icon: <FaPaintBrush />,
                  content: (
                    <ol>
                      <li>Investigación de usuarios</li>
                      <li>Wireframing</li>
                      <li>Diseño visual</li>
                      <li>Prototipado</li>
                      <li>Testing</li>
                    </ol>
                  ),
                },
                {
                  label: "Entregables",
                  icon: <FaRocket />,
                  content: (
                    <ul>
                      <li>Design System</li>
                      <li>Prototipos interactivos</li>
                      <li>Documentación</li>
                    </ul>
                  ),
                }
              ],
            }}
          />
        </div>
        

            {/* -----------------------------SOPORTE CARD-----------------------------*/}

            <div data-aos="fade-up" data-aos-delay="400" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/hosting.json" />}
            titulo="Hosting y dominio"
            descripcion="Gestión de alojamiento web y registro de dominios facil y sin complicaciones."
            modalData={{
              title: "Hosting y Dominio",
              description: "Gestionamos todo el proceso de alojamiento y registro de dominio para tu sitio web.",
              image: { src: "src/assets/images/modals_assets/hosting.webp", alt: "Hosting" },
              tabs: [
                {
                  label: "Servicios",
                  icon: <FaServer />,
                  content: (
                    <ul>
                      <li>Hosting optimizado</li>
                      <li>SSL gratuito</li>
                      <li>CDN incluido</li>
                      <li>Soporte DNS</li>
                    </ul>
                  ),
                },
                {
                  label: "Características",
                  icon: <FaCogs />,
                  content: (
                    <ul>
                      <li>Alto rendimiento</li>
                      <li>Backups automáticos</li>
                      <li>Panel de control</li>
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
            icon={<Svg route="src/assets/images/modals_assets/support.json" />}
            titulo="Mantenimiento y soporte técnico"
            descripcion="Actualizaciones regulares, corrección de errores y soporte continuo."
            modalData={{
              title: "Mantenimiento y Soporte",
              description: "Mantenemos tu sitio actualizado y funcionando perfectamente.",
              image: { src: "src/assets/images/modals_assets/mantenimiento.png", alt: "Soporte Técnico" },
              tabs: [
                {
                  label: "Servicios",
                  icon: <FaTools />,
                  content: (
                    <ul>
                      <li>Actualizaciones de seguridad</li>
                      <li>Backups regulares</li>
                      <li>Monitoreo 24/7</li>
                      <li>Soporte técnico</li>
                    </ul>
                  ),
                },
                {
                  label: "Plan mensual",
                  icon: <FaCogs />,
                  content: (
                    <ul>
                      <li>Mantenimiento preventivo</li>
                      <li>Corrección de errores</li>
                      <li>Optimización continua</li>
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

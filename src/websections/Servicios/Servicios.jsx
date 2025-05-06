import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Servicios.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaServer, FaShare, FaPaintBrush, FaCode, FaTools, FaCogs } from "react-icons/fa";
import ServicioCard from "../../components/ServicioCard/ServicioCard";
import Svg from "../../components/Svg/Svg";

export default function Servicios() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <section className={styles.serviciosSection} id="servicios">
      <CoolTitle className={styles.titulo}>¿Qué ofrecemos?</CoolTitle>
      <div className={styles.serviciosGrid}>
        <div data-aos="fade-up" data-aos-delay="100" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/world.json" />}
            titulo="Desarrollo Web"
            descripcion="Sitios web modernos, rápidos y personalizados para tu negocio."
            modalData={{
              title: "Desarrollo Web",
              subtitle: <Svg route="src/assets/images/modals_assets/world.json" />,
              description: <Svg route="src/assets/images/modals_assets/world.json" />,
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
        <div data-aos="fade-up" data-aos-delay="200" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/responsive.json" />}
            titulo="Diseño Responsivo"
            descripcion="Tu página se verá perfecta en cualquier dispositivo, ya sea PC o celular."
            modalData={{
              title: "Diseño Responsivo",
              subtitle: "Adaptabilidad Total",
              description: "Desarrollamos tu sitio web para que funcione perfectamente en cualquier dispositivo y tamaño de pantalla.",
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
        <div data-aos="fade-up" data-aos-delay="300" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/support.json" />}
            titulo="Mantenimiento y soporte técnico"
            descripcion="Actualizaciones regulares, corrección de errores y soporte continuo."
            modalData={{
              title: "Mantenimiento y Soporte",
              subtitle: "Servicio Continuo",
              description: "Mantenemos tu sitio actualizado, seguro y funcionando perfectamente.",
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
        <div data-aos="fade-up" data-aos-delay="400" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/hosting.json" />}
            titulo="Hosting y dominio"
            descripcion="Gestión de alojamiento web y registro de dominios sin complicaciones."
            modalData={{
              title: "Hosting y Dominio",
              subtitle: "Infraestructura Web",
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
        <div data-aos="fade-up" data-aos-delay="500" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="/src/assets/images/modals_assets/social.json" />}
            titulo="Integración con redes sociales"
            descripcion="Conexión automática con plataformas sociales integradas en tiempo real en la web."
            modalData={{
              title: "Integración Social",
              subtitle: "Conectividad Total",
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
        <div data-aos="fade-up" data-aos-delay="600" className={styles.cardWrapper}>
          <ServicioCard
            icon={<Svg route="src/assets/images/modals_assets/design.json" />}
            titulo="Diseño personalizado de UX/UI"
            descripcion="Interfaces únicas y optimizadas para la experiencia del usuario completamente hechas desde cero, sin plantillas."
            modalData={{
              title: "Diseño UX/UI",
              subtitle: "Experiencia Única",
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
      </div>
    </section>
  );
}

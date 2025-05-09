import React from "react";
import styles from "./Proceso.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import { FaComments, FaFileSignature, FaLaptopCode, FaRocket, FaHandsHelping } from "react-icons/fa"; // Import chosen icons

const pasos = [
  { 
    titulo: "1. Consulta", 
    desc: "Hablamos sobre tu idea y necesidades.", 
    icon: <FaComments size={24} /> 
  },
  { 
    titulo: "2. Propuesta", 
    desc: "Te enviamos una propuesta personalizada.", 
    icon: <FaFileSignature size={24} /> 
  },
  { 
    titulo: "3. Desarrollo", 
    desc: "Creamos tu web y te mostramos avances.", 
    icon: <FaLaptopCode size={24} /> 
  },
  { 
    titulo: "4. Lanzamiento", 
    desc: "Publicamos tu web y te acompañamos.", 
    icon: <FaRocket size={24} /> 
  },
  { 
    titulo: "5. Soporte", 
    desc: "Ofrecemos soporte post-lanzamiento.", 
    icon: <FaHandsHelping size={24} /> 
  }
  
];

export default function Proceso() {
  return (
    <section className={styles.procesoSection} id="proceso">
      <CoolTitle 
        animation="fade-up" 
        className={styles.titulo} 
        data-aos="fade-up"
        data-aos-offset="150" // Title animates when it's 150px from viewport bottom
      >
        ¿Cómo trabajamos?
      </CoolTitle>
      <div className={styles.pasosGrid}>
        {pasos.map((p, i) => (
          <div className={styles.pasoItemContainer} key={i}>
            <div
              className={styles.pasoCard}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // Odd items (0,2..) fade right, Even items (1,3..) fade left
              data-aos-delay={i * 150} // Slightly increase delay for better effect
              data-aos-offset="100" // Cards animate when they are 100px from viewport bottom
            >
              <div className={styles.pasoTituloContainer}>
                {/* Render the icon here. Replace p.icon with your actual icon component if it's not a string */}
                <span className={styles.pasoIcon}>{p.icon}</span> 
                <h4>{p.titulo}</h4>
              </div>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

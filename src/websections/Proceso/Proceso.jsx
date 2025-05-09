import React, { useEffect } from "react"; // Removed useRef, useState
import styles from "./Proceso.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import { FaComments, FaFileSignature, FaLaptopCode, FaRocket, FaHandsHelping } from "react-icons/fa"; 
import AOS from 'aos'; 
import Timeline from "../../components/Timeline/Timeline"; // Import the new Timeline component

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
  },
];

export default function Proceso({ contentVisible }) { 
  // gridRef and isTimelineActive state and associated useEffect are removed

  useEffect(() => {
    if (contentVisible) {
      const timer = setTimeout(() => {
        AOS.refreshHard(); 
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [contentVisible]);

  // IntersectionObserver useEffect for timeline animation is removed

  return (
    <section className={styles.procesoSection} id="proceso">
      <CoolTitle 
        className={styles.titulo} 
      >
        ¿Cómo trabajamos?
      </CoolTitle>
      <Timeline items={pasos} /> {/* Use the Timeline component */}
    </section>
  );
}

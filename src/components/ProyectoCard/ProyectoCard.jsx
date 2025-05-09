import React from 'react';
import styles from './ProyectoCard.module.css';
// Button import is no longer needed here

const ProyectoCard = ({ imagen, titulo, descripcion, tecnologias, projectLink }) => {
  return (
    <a 
      href={projectLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.proyectoCardLink}
    >
      <div className={styles.proyectoCard}>
        <div className={styles.imagenContainer}>
          <img src={imagen} alt={`Imagen del proyecto ${titulo}`} className={styles.imagenProyecto} />
        </div>
        <div className={styles.contenidoCard}>
          <h3 className={styles.tituloProyecto}>{titulo}</h3>
          <p className={styles.descripcionProyecto}>{descripcion}</p>
          <div className={styles.tecnologiasContainer}>
            {tecnologias.map((tech, index) => (
              <span key={index} className={styles.tecnologiaTag}>
                {tech}
              </span>
            ))}
          </div>
          {/* Botones eliminados */}
        </div>
      </div>
    </a>
  );
};

export default ProyectoCard;

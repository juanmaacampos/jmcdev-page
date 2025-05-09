import React, { useRef, useState } from 'react';
import styles from './3dCard.module.css';
import Button from '../Button/Button'; // Adjusted path relative to current file

const Card3D = ({ plan, destacado }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glow, setGlow] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // Define max rotation, e.g., 15 degrees
    const maxRotate = 15;
    const newRotateX = (deltaY / centerY) * -maxRotate;
    const newRotateY = (deltaX / centerX) * maxRotate;

    setRotateX(newRotateX);
    setRotateY(newRotateY);
    setGlow(true);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlow(false);
  };

  return (
    <div
      className={`${styles.cardContainer} ${destacado ? styles.destacado : ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s linear, box-shadow 0.3s ease', // Ensure smooth transform updates
      }}
    >
      <div className={styles.cardContent}>
        <h3>{plan.nombre}</h3>
        <div className={styles.precio}>{plan.precio}</div>
        <p className={styles.descripcion}>{plan.descripcion}</p>
        <ul>
          {plan.beneficios.map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
        <Button label="Me interesa" effect="neon" size="medium" scrollTarget="contacto" />
      </div>
    </div>
  );
};

export default Card3D;

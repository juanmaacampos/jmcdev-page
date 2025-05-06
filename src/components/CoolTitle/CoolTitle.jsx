import React from 'react';
import styles from './CoolTitle.module.css';

function CoolTitle({ children, className, animation = 'none' }) {
  return (
    <h1 
      className={`${styles.title} ${styles[animation]} ${className || ''}`}
      data-text={children} // Necesario para efectos como glitch
    >
      {children}
    </h1>
  );
}

export default CoolTitle;

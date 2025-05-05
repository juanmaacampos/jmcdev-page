import React from 'react';
import styles from './Section.module.css';

function Section({
  children,
  background,          // Color o imagen de fondo
  spacing = 'medium',  // 'small' | 'medium' | 'large'
  width = 'default',   // 'narrow' | 'default' | 'wide' | 'full'
  className,
  containerClassName,
  id,
}) {
  return (
    <section 
      className={`${styles.section} ${styles[spacing]} ${className}`}
      style={{ background }}
      id={id}
    >
      <div className={`${styles.container} ${styles[width]} ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;

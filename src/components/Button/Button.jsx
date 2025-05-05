import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({
  label,
  onClick,
  to,
  color = '#55D3C4', // Color por defecto
  effect = 'normal',
  size = 'medium',
  shape = 'normal',
  className = '',
  style = {},
  icon, // Nuevo prop para el icono
  ...props
}) {
  const buttonClasses = `
    ${styles.button} 
    ${styles[size]} 
    ${styles[effect]} 
    ${styles[shape]}
    ${className}
  `.trim();

  const buttonStyle = {
    ...style,
    ...(color && effect === 'neon' ? {
      '--button-color': color,
      '--button-glow': `${color}40`
    } : {
      '--button-color': color
    })
  };

  const isMobile = window.innerWidth <= 900; // Define el breakpoint para móvil

  const buttonContent = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </>
  );

  const buttonWithDirection = (
    <span style={{ display: 'inline-flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center' }}>
      {buttonContent}
    </span>
  );

  if (to?.startsWith('http')) {
    return (
      <a 
        href={to} 
        className={buttonClasses}
        style={buttonStyle}
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {buttonWithDirection}
      </a>
    );
  }

  if (to) {
    return (
      <Link 
        to={to} 
        className={buttonClasses}
        style={buttonStyle}
        {...props}
      >
        {buttonWithDirection}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      style={buttonStyle}
      onClick={onClick} 
      {...props}
    >
      {buttonWithDirection}
    </button>
  );
}

export default Button;
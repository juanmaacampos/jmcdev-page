import styles from './Button.module.css';
import { Link } from 'react-router-dom';

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
        {label}
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
        {label}
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
      {label}
    </button>
  );
}

export default Button;
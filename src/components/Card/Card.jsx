import React from 'react';
import styles from './Card.module.css';

function Card({
  title,
  subtitle,
  content,
  image,
  actions,
  variant = 'default',
  hoverable = true,
  className,
  onClick
}) {
  return (
    <div 
      className={`
        ${styles.card} 
        ${styles[variant]} 
        ${hoverable ? styles.hoverable : ''} 
        ${className}
      `}
      onClick={onClick}
    >
      {image && (
        <img 
          src={image.src} 
          alt={image.alt} 
          className={styles.image}
        />
      )}
      
      {title && <h3 className={styles.title}>{title}</h3>}
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {content && <div className={styles.content}>{content}</div>}
      
      {actions && (
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <div key={index}>{action}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;

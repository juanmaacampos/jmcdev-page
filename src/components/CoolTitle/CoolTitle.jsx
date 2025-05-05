import React from 'react';
import styles from './CoolTitle.module.css';

function CoolTitle({ children, className }) {
  return (
    <h1 className={`${styles.title} ${className || ''}`}>
      {children}
    </h1>
  );
}

export default CoolTitle;

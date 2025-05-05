import React, { useEffect, useState } from 'react';
import styles from './MachineTypeTitle.module.css';

function MachineTypeTitle({
  words,
  typingSpeed = 90,
  deletingSpeed = 40,
  pause = 1200,
  className = '',
  color, // Nuevo: color personalizado
}) {
  // Si no se pasan words, no mostrar nada
  if (!Array.isArray(words) || words.length === 0) return null;

  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullWord = words[currentWord];

    if (!isDeleting && displayed.length < fullWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayed.length === fullWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, words, currentWord, typingSpeed, deletingSpeed, pause]);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span
        className={styles.title}
        style={color ? { '--machine-title-gradient': color } : undefined}
      >
        {displayed}
        <span className={styles.cursor} aria-hidden="true" />
      </span>
    </div>
  );
}

export default MachineTypeTitle;

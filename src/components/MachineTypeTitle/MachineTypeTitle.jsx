import React, { useEffect, useState } from 'react';
import styles from './MachineTypeTitle.module.css';

function MachineTypeTitle({
  words,
  typingSpeed = 90,
  deletingSpeed = 40,
  pause = 1200,
  className = '',
  color, // Nuevo: color personalizado
  fonts = [], // Nuevo: array de fuentes
}) {
  // Si no se pasan words, no mostrar nada
  if (!Array.isArray(words) || words.length === 0) return null;

  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [fontIndex, setFontIndex] = useState(0); // Nuevo estado para la fuente

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
        setFontIndex((prev) => fonts.length > 0 ? (prev + 1) % fonts.length : 0);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, words, currentWord, typingSpeed, deletingSpeed, pause, fonts.length]);

  // Aplica la fuente actual si hay fonts
  const fontFamily = fonts.length > 0 ? { fontFamily: fonts[fontIndex] } : {};

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <span
        className={styles.title}
        style={{
          ...(color ? { '--machine-title-gradient': color } : {}),
          ...fontFamily
        }}
      >
        {displayed}
        <span className={styles.cursor} aria-hidden="true" />
      </span>
    </div>
  );
}

export default MachineTypeTitle;

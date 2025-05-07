import React, { useRef, useEffect } from 'react';
import styles from './ParallaxMouseImage.module.css';

function ParallaxMouseImage({ src, alt, className, draggable }) {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (imageWrapperRef.current) {
        const rect = imageWrapperRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (x - centerX) / 20; // Adjust divisor for intensity
        const offsetY = (y - centerY) / 20;

        imageWrapperRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    const resetTransform = () => {
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transform = 'translate(0, 0)';
      }
    };

    if (imageWrapperRef.current) {
      imageWrapperRef.current.addEventListener('mousemove', handleMouseMove);
      imageWrapperRef.current.addEventListener('mouseleave', resetTransform);
    }

    return () => {
      if (imageWrapperRef.current) {
        imageWrapperRef.current.removeEventListener('mousemove', handleMouseMove);
        imageWrapperRef.current.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);

  return (
    <div 
      ref={imageWrapperRef} 
      className={styles.parallaxContainer}
    >
      <img 
        src={src} 
        alt={alt} 
        className={className}
        draggable={draggable}
      />
    </div>
  );
}

export default ParallaxMouseImage;

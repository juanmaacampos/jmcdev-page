import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const Svg = ({ route }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(route);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    if (route) {
      loadAnimation();
    }
  }, [route]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ 
      width: '64px', 
      height: '64px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      margin: '0 auto 1rem auto' // Mantiene el centrado y el espaciado
    }}>
      {animationData && (
        <Lottie
          options={defaultOptions}
          height={72} // Ligeramente más grande que el contenedor para mejor visualización
          width={72}
          style={{
            maxWidth: '120%', // Permite que la animación sea un poco más grande que el contenedor
            maxHeight: '120%',
            margin: 0,
            padding: 0,
            transform: 'scale(1.1)' // Efecto de zoom suave
          }}
        />
      )}
    </div>
  );
};

export default Svg;

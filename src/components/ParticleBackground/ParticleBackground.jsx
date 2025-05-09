import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Carga la versión ligera

const ParticleBackground = ({ id = "tsparticles-background", backgroundColor = '#171717' }) => {
  const particlesInit = useCallback(async (engine) => {
    // Carga el motor de tsparticles
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Puedes hacer algo una vez que las partículas estén cargadas
    // await console.log(container);
  }, []);

  const particleOptions = {
    fullScreen: {
      enable: false, // MUY IMPORTANTE: para que no ocupe toda la pantalla
      zIndex: -1,    // Se gestionará con el estilo del componente
    },
    background: {
      color: {
        value: backgroundColor, // Use prop for background color
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // Partículas se alejan del ratón
        },
        onClick: {
          enable: true,
          mode: 'push', // Añade partículas al hacer clic
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // Distancia del efecto de repulsión
          duration: 0.4,
        },
        push: {
          quantity: 1, // Número de partículas a añadir al hacer clic (reducido)
        },
      },
    },
    particles: {
      color: {
        value: '#55d3c4', // Color de las partículas (ajusta al color de tu página)
      },
      links: {
        color: '#ffffff', // Color de las líneas entre partículas
        distance: 150,
        enable: true,
        opacity: 0.15, // Opacidad baja para líneas sutiles
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out', // Las partículas desaparecen al salir de los límites
        },
        random: false,
        speed: 1.2, // Velocidad de las partículas
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Área para el cálculo de la densidad de partículas
        },
        value: 50, // Número de partículas inicial
        limit: 200, // Límite máximo de partículas en pantalla
      },
      opacity: {
        value: 0.4, // Opacidad de las partículas
      },
      shape: {
        type: 'circle', // Forma de las partículas
      },
      size: {
        value: { min: 1, max: 3 }, // Tamaño de las partículas (aleatorio entre 1 y 3)
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id={id} // Use prop for ID
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Para que esté detrás del contenido de la sección
      }}
    />
  );
};

export default ParticleBackground;

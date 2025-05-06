import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const ResponsiveAnimation = ({ route }) => {
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
    <div>
      {animationData && (
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      )}
    </div>
  );
};

export default ResponsiveAnimation;

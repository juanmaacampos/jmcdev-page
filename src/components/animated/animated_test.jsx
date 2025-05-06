// src/components/animated_test.jsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/responsive_ani.json";

const MiAnimacion = () => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MiAnimacion;

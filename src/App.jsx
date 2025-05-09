import { useRef } from "react"; // useEffect, useState removed
// LoaderDiagonal import removed
import Header from "./websections/Header/Header";
import Navbar from "./websections/Navbar/Navbar";
import Footer from "./websections/footer/Footer";
import './App.css';
// import Svg from "./components/Svg/Svg"; // Not used in this simplified version
import Servicios from "./websections/Servicios/Servicios";
// import VideoSection from "./websections/VideoSection/VideoSection"; // No longer directly used here
// Proceso and Planes imports will be handled by HorizontalScrollSection, but keep them if used elsewhere or for clarity
// import Proceso from "./websections/Proceso/Proceso"; // No longer directly imported if only used in HorizontalScrollSection
// import Planes from "./websections/Planes/Planes";   // No longer directly imported if only used in HorizontalScrollSection
import Portafolio from "./websections/Portafolio/Portafolio";
import Testimonios from "./websections/Testimonios/Testimonios";
import Contacto from "./websections/Contacto/Contacto";

// gsap, ScrollTrigger, Lenis imports removed
import VideoMaskEffect from "./components/VideoMaskEffect/VideoMaskEffect";
import PageWrapper from "./components/PageWrapper/PageWrapper"; // Import the new component
import HorizontalScrollSection from "./components/HorizontalScrollSection/HorizontalScrollSection"; // Import the new component

// gsap.registerPlugin(ScrollTrigger); // Moved to PageWrapper

function App() {
  // loading, contentVisible state removed
  const videoSectionRef = useRef(null); 
  const videoOverlayRef = useRef(null); 

  // useEffect for loader removed
  // useEffect for Lenis removed

  return (
    <PageWrapper>
      {(contentIsVisible) => (
        <>
          <Navbar />
          <Header />
          <Servicios id="servicios" />
          <VideoMaskEffect 
            videoSectionRef={videoSectionRef} 
            videoOverlayRef={videoOverlayRef} 
            contentVisible={contentIsVisible} 
          />
          {/* Replace Proceso and Planes with HorizontalScrollSection */}
          <HorizontalScrollSection contentVisible={contentIsVisible} />
          <Portafolio />
          <Testimonios />
          <Contacto />
          <Footer />
        </>
      )}
    </PageWrapper>
  );
}

export default App;

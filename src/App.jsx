import { useEffect, useState } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Header from "./websections/Header/Header";
import Navbar from "./websections/Navbar/Navbar";
import Footer from "./websections/footer/Footer";
import './App.css';
import Svg from "./components/Svg/Svg";
import Servicios from "./websections/Servicios/Servicios";
import Proceso from "./websections/Proceso/Proceso";
import Planes from "./websections/Planes/Planes";
import Portafolio from "./websections/Portafolio/Portafolio";
import Testimonios from "./websections/Testimonios/Testimonios";
import Contacto from "./websections/Contacto/Contacto";

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setContentVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoaderDiagonal isVisible={loading} />

      <div className={`contenido ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <main>
          <Header />
          <Servicios />
          <Proceso />
          <Planes />
          <Portafolio />
          <Testimonios />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

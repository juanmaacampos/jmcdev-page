import { useEffect, useState } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Header from "./websections/Header/Header";
import Navbar from "./websections/Navbar/Navbar";
import Footer from "./websections/footer/Footer";
import './App.css';
import ResponsiveAnimation from "./components/ResponsiveAnimation/ResponsiveAnimation";


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
          <ResponsiveAnimation route="/src/assets/animated/responsive_ani.json" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;


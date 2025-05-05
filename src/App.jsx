import { useEffect, useState } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Navbar from "./principalComponents/Navbar/Navbar";
import './App.css';
import Home from "./principalComponents/mainContent";
import Footer from "./principalComponents/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => setLoading(false), 3500);
    const contentTimeout = setTimeout(() => setContentVisible(true), 2000);
    
    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);

  return (
    <>
      <LoaderDiagonal isVisible={loading} />
      
      <div className={`contenido ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;


import { useEffect, useState } from "react";
import LoaderDiagonal from "./components/Loader/Loader";
import Header from "./principalComponents/Header/Header";
import Navbar from "./principalComponents/Navbar/Navbar";
import Footer from "./principalComponents/footer/Footer";
import './App.css';


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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;


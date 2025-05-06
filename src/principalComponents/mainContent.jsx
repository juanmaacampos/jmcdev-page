// src/pages/Home.jsx
import Header from "./Header/Header";
import styles from './mainContent.module.css';
import Card from "../components/Card/Card";
import Button from "../components/Button/Button"; 
import MiAnimacion from "../components/animated/animated_test";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MiAnimacion/>
    </div>
  );
}

export default Home;

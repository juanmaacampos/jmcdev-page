// src/pages/Home.jsx
import Header from "./Header/Header";
import styles from './mainContent.module.css';
import Card from "../components/Card/Card";
import Button from "../components/Button/Button"; 

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Card
        title="Proyecto"
        subtitle="Landing Page"
        content="Descripción breve del proyecto."
        image={{ src: "/img.png", alt: "Imagen" }}
        actions={[<Button label="Ver" to="/proyecto" />]}
      />
    </div>
  );
}

export default Home;

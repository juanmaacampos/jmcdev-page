// src/pages/Home.jsx
import Header from "./Header/Header";
import styles from './mainContent.module.css';
import Grid from 'src/components/Layout'

function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default Home;

import React from 'react';
import Button from '../../components/Button/Button';
import MachineTypeTitle from '../../components/MachineTypeTitle/MachineTypeTitle';
import styles from './Header.module.css';
import CoolTitle from '../../components/CoolTitle/CoolTitle';
import { FaEye, FaGithub, FaLaptop, FaListAlt } from 'react-icons/fa';
import ParallaxMouseImage from '../../components/ParallaxMouseImage/ParallaxMouseImage';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <CoolTitle>Creamos Experiencias Digitales que</CoolTitle>
            <MachineTypeTitle
              words={['conectan', 'sorprenden', 'venden', 'posicionan', 'trascienden', 'destacan', 'atraen']}
              color="#B687F7" // o "linear-gradient(45deg, #fff 30%, #B687F7 100%)"
            />
            
            <p className={styles.description}>
            <strong>Diseñamos sitios web únicos y optimizamos redes sociales usando fotografías profesionales</strong> para conectar con tu audiencia y crecer tu negocio con creatividad y tecnología.</p>

          </div>
          
          <div className={styles.imageWrapper}>
            <ParallaxMouseImage 
              src="/src/assets/images/header_img.png" 
              alt="Desarrollo web" 
              className={styles.headerImage}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import Button from '../../components/Button/Button';
import CoolTitle from '../../components/CoolTitle/CoolTitle';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <CoolTitle>
              Creamos experiencias<br />
              digitales que<br />
              <span>transforman</span>
            </CoolTitle>
            
            <p className={styles.description}>
              Desarrollamos sitios web únicos y poderosos que conectan 
              con tu audiencia y potencian el crecimiento de tu negocio.
            </p>

            <div className={styles.buttons}>
              <Button 
                label="Ver Proyectos" 
                variant="primary" 
                size="large"
                to="/proyectos"
              />
              <Button 
                label="GitHub"
                to="https://github.com/JMCodedev"
                color='#B687F7'
                size="small"
                variant='primary'
              />
            </div>
          </div>
          
          <div className={styles.imageWrapper}>
            <img 
              src="/src/assets/images/header_img.png" 
              alt="Desarrollo web" 
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

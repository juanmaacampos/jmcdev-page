import React from 'react';
import Button from '../../components/Button/Button';
import MachineTypeTitle from '../../components/MachineTypeTitle/MachineTypeTitle';
import styles from './Header.module.css';
import CoolTitle from '../../components/CoolTitle/CoolTitle';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <CoolTitle>Creamos Experiencias Digitales que</CoolTitle>
            <MachineTypeTitle
              words={['conectan', 'sorprenden', 'venden', 'posicionan', 'atraen', 'destacan']}
              color="#B687F7" // o "linear-gradient(45deg, #fff 30%, #B687F7 100%)"
/>
            
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
                to="https://github.com/juanmaacampos"
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

import styles from './Logo.module.css';
import logoImage from '../../assets/images/jmcdev.png';

const Logo = ({ onClick }) => {
  return (
    <div className={styles.logo} onClick={onClick}>
      <img src={logoImage} alt="JMCdev Logo" />
    </div>
  );
};

export default Logo;

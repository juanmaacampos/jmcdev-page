import styles from './Logo.module.css';

const Logo = ({ onClick }) => {
  return (
    <div className={styles.logo} onClick={onClick}>
      <img src="src/assets/images/jmcdev.png" alt="JMCdev Logo" />
    </div>
  );
};

export default Logo;

import styles from './Loader.module.css';

const LoaderDiagonal = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className={styles.loaderContainer}>
      <div className={`${styles.stripe} ${styles.stripe1}`}></div>
      <div className={`${styles.stripe} ${styles.stripe2}`}></div>
      <div className={`${styles.stripe} ${styles.stripe3}`}></div>
    </div>
  );
};

export default LoaderDiagonal;

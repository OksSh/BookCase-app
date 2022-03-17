import styles from '../Preloader/Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <span className={styles.preloader_circle1}> </span>
      <span className={styles.preloader_circle2}></span>
      <span className={styles.preloader_circle3}></span>
    </div>
  );
};

import styles from '../Footer/Footer.module.css';

export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footer_text}>© Book CASE 2022</p>
        </div>
      </div>
    </>
  );
};

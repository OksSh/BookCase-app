import { useContext } from 'react';
import { Context } from '../../App';
import styles from '../Footer/Footer.module.css';
import { Toggle } from '../Toggle/Toggle';

export const Footer = () => {
  const { changeIsDark } = useContext(Context);

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.footer_text}>© Book CASE 2022.</p>
          <Toggle onClick={changeIsDark} />
        </div>
      </div>
    </div>
  );
};

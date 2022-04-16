import { useContext } from 'react';
import { Context } from '../../App';
import styles from '../HomePage/HomePage.module.css';

export const HomePage = () => {
  const { theme, isDark } = useContext(Context);
  return (
    <div className={styles.homePage} style={theme}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div
            style={{ background: `url(/assets/img/home-page.jpg)` }}
            className={styles.homePage_image}
          ></div>
          <div
            style={isDark ? { color: '#191919' } : { color: '#FFFFFF' }}
            className={styles.homePage_title}
          >
            <h1>Books are important for the mind, heart, and soul</h1>
            <p>
              “Reading is escape, and the opposite of escape; it’s a way to make
              contact with reality after a day of making things up, and it’s a
              way of making contact with someone else’s imagination after a day
              that’s all too real.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

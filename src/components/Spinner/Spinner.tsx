import { useContext } from 'react';
import { Context } from '../../App';
import styles from '..//Spinner/Spinner.module.css';

export const Spinner = () => {
  const { isDark } = useContext(Context);
  return (
    <div className={isDark ? styles.spinner_light : styles.spinner_dark}></div>
  );
};

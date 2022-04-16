import styles from '../Toggle/Toggle.module.css';
import { Context } from '../../App';
import { useContext, useEffect, useState } from 'react';

interface IToggleProps {
  onClick: () => void;
}

export const Toggle = ({ onClick }: IToggleProps) => {
  const { isDark } = useContext(Context);

  return (
    <div onClick={onClick} className={styles.toggle}>
      <div
        className={
          isDark ? `${styles.toggle_wrapper_dark}` : `${styles.toggle_wrapper}`
        }
      >
        <div
          className={
            isDark ? `${styles.toggle_switch_dark}` : `${styles.toggle_switch}`
          }
        ></div>
      </div>
    </div>
  );
};

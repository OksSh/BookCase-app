import { useContext } from 'react';
import { Context } from '../../App';
import styles from '../Title/Title.module.css';

interface ITitleProps {
  text: string;
}

export const Title = ({ text }: ITitleProps) => {
  const { theme } = useContext(Context);
  return (
    <h1 style={theme} className={styles.title}>
      {text}
    </h1>
  );
};

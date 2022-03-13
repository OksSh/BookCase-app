import styles from '../Title/Title.module.css';

interface ITitleProps {
  text: string;
}

export const Title = ({ text }: ITitleProps) => {
  return (
    <>
      <h1 className={styles.title}>{text}</h1>
    </>
  );
};

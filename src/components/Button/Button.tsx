import styles from '../Button/Button.module.css';
interface IButtonProps {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: IButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

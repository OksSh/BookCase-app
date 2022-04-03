import { ChangeEventHandler } from 'react';
import styles from '../TextArea/TextArea.module.css';

interface ITextAreaProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = ({ name, value, onChange }: ITextAreaProps) => {
  return (
    <div className={styles.textArea}>
      <p className={styles.textArea_label}>{name}</p>
      <textarea
        className={styles.textArea_item}
        value={value}
        onChange={onChange}
        name={name}
      >
        {value}
      </textarea>
    </div>
  );
};

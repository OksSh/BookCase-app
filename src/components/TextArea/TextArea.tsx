import { ChangeEventHandler, useContext } from 'react';
import { Context } from '../../App';
import styles from '../TextArea/TextArea.module.css';

interface ITextAreaProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = ({ name, value, onChange }: ITextAreaProps) => {
  const { theme } = useContext(Context);
  return (
    <div style={theme} className={styles.textArea}>
      <p style={theme} className={styles.textArea_label}>
        {name}
      </p>
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

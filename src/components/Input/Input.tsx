import { ChangeEventHandler, KeyboardEventHandler, useContext } from 'react';
import { Context } from '../../App';
import styles from '../Input/Input.module.css';

interface IInputProps {
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  error?: string;
  type?: string;
}

export const Input = ({
  name,
  onChange,
  onKeyDown,
  value,
  placeholder,
  error,
  type,
}: IInputProps) => {
  const { theme } = useContext(Context);
  return (
    <div className={styles.input}>
      <label style={theme} className={styles.input_label} htmlFor={name}>
        {name}
      </label>
      <input
        type={type}
        className={`${styles.form_input} ${error ? styles.errorInput : null}`}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
      ></input>
      {error ? <p className={styles.errorTitle}>{error}</p> : null}
    </div>
  );
};

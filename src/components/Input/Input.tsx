import { ChangeEventHandler, KeyboardEventHandler } from 'react';
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
  return (
    <div className={styles.input}>
      <label className={styles.input_label} htmlFor={name}>
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

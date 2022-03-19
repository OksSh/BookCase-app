import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styles from '../Input/Input.module.css';

interface IInputProps {
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
}

export const Input = ({
  name,
  onChange,
  onKeyDown,
  value,
  placeholder,
}: IInputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

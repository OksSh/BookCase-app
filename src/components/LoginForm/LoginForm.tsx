import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from '../LoginForm/LoginForm.module.css';
import { Title } from '../Title/Title';
import { validationService } from '../../services/validation';
import { userLogin } from '../../services/userLogin';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => history.push('/'));

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    const error = validationService.validateEmail(value);
    setErrors({ ...errors, email: error });
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    const error = validationService.validatePassword(value);
    setErrors({ ...errors, password: error });
  };

  const onClick = () => {
    const emailError = validationService.validateEmail(email);
    const passwordError = validationService.validatePassword(password);
    const error = { email: emailError, password: passwordError };
    setErrors(error);
    const values = Object.values(error);
    const isValid = values.every((item) => item === '');

    if (isValid) {
      dispatch(userLogin(email, password));
    }
  };

  const error = errors ? Object.values(errors).flat(Infinity) : '';

  return (
    <div className={styles.loginForm}>
      <div className={styles.container}>
        <Title text='Login' />
        <div className={styles.loginForm_items}>
          <Input onChange={onChangeEmail} name='Email' />
          <Input onChange={onChangePassword} name='Password' />
          <Button text='Login' onClick={onClick} />
          {/* <p>
            If you don't have account you can{' '}
            <a href='/registration'>registration</a>
          </p> */}
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
};

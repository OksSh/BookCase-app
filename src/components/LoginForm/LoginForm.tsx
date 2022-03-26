import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from '../LoginForm/LoginForm.module.css';
import { Title } from '../Title/Title';
import { validationService } from '../../services/validation';
import { userLogin } from '../../services/userLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IState } from '../../redux/store';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state: IState) => state.userReducer.isLogin);

  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  });

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setEmail(value);
      const error = validationService.validateEmail(value);
      setErrors((errors) => ({ ...errors, email: error }));
    },
    []
  );

  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPassword(value);
      const error = validationService.validatePassword(value);
      setErrors((errors) => ({ ...errors, password: error }));
    },
    []
  );

  const onClick = () => {
    const emailError = validationService.validateEmail(email);
    const passwordError = validationService.validatePassword(password);
    const error = { email: emailError, password: passwordError };
    setErrors(error);
    const values = Object.values(error);
    const isValid = values.every((item) => item === '');

    // if (isValid) {
    //   dispatch(userLogin(email, password));
    // }
  };

  const onClickRegistration = () => {
    history.push('/registration');
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Login' />
          <div className={styles.loginForm_items}>
            <div>
              <Input
                error={errors.email}
                onChange={onChangeEmail}
                name='Email'
              />
            </div>
            <div>
              <Input
                error={errors.password}
                onChange={onChangePassword}
                name='Password'
              />
            </div>
            <div>
              <Button text='Login' onClick={onClick} />
            </div>
            <p className={styles.loginForm_items_text}>
              If you dont have account you can
              <span onClick={onClickRegistration}>registration</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

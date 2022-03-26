import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from '../RegistrationForm/RegistrationForm.module.css';
import { Title } from '../Title/Title';
import { validationService } from '../../services/validation';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';

export const RegistrationForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const error = useSelector((state: IState) => state.userReducer.error);

  const onChangeUserName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setUserName(value);
      const userNameError = validationService.validateName(value);
      setErrors((errors) => ({ ...errors, userName: userNameError }));
    },
    []
  );

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setEmail(value);
      const emailError = validationService.validateEmail(value);
      setErrors((errors) => ({ ...errors, email: emailError }));
    },
    []
  );

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    const passwordError = validationService.validatePassword(value);
    setErrors((errors) => ({ ...errors, password: passwordError }));
  };

  const onChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setConfirmPassword(value);
    const confirmPasswordError = validationService.validateRepeatedPassword(
      password,
      value
    );
    setErrors((errors) => ({
      ...errors,
      confirmPassword: confirmPasswordError,
    }));
  };

  const onClick = () => {
    const errors = {
      userName: validationService.validateName(userName),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    };

    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((item) => item === '');

    // if (isValid) {
    //   dispatch(register({ userName, email, password }));
    // }
  };

  const onClickRegistration = () => {
    history.push('/login');
  };

  return (
    <div className={styles.registrationForm}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Registration' />
          <div className={styles.registrationForm_items}>
            <div>
              <Input
                error={errors.userName}
                onChange={onChangeUserName}
                name='User Name'
              />
            </div>
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
                type='password'
              />
            </div>
            <div>
              <Input
                error={errors.confirmPassword}
                onChange={onChangeConfirmPassword}
                name='Confirm Rassword'
              />
            </div>
            <div>
              <Button onClick={onClick} text='Registration' />
            </div>
            <p className={styles.registrationForm_items_text}>
              If you have account you can
              <span onClick={onClickRegistration}>login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

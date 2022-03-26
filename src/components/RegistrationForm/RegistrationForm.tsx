import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from '../RegistrationForm/RegistrationForm.module.css';
import { Title } from '../Title/Title';

export const RegistrationForm = () => {
  const onClick = () => {};

  return (
    <div className={styles.registrationForm}>
      <div className={styles.container}>
        <Title text='Registration' />
        <div className={styles.registrationForm_items}>
          <Input name='User Name' />
          <Input name='Email' />
          <Input name='Password' />
          <Input name='Confirm Rassword' />
          <Button onClick={onClick} text='Registration' />
          {/* <p>
            If you have account you can <a href='/login'>login</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

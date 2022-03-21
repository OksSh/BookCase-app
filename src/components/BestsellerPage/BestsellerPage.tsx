import { BestsellerList } from '../BestsellerList/BestsellerList';
import styles from '../BestsellerPage/BestsellerList.module.css';
import { Title } from '../Title/Title';

export const BestsellerPage = () => {
  return (
    <div className={styles.bestsellerPage}>
      <div className={styles.container}>
        <Title text='The New York Times Best Sellers' />
        <p></p>
        <BestsellerList />
      </div>
    </div>
  );
};

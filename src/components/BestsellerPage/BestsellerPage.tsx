import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { getBestsellerBooks } from '../../services/bestsellerBookList';
import {
  BestsellerList,
  IBestSellerListProps,
} from '../BestsellerList/BestsellerList';
import styles from '../BestsellerPage/BestsellerPage.module.css';
import { Preloader } from '../Preloader/Preloader';
import { Title } from '../Title/Title';

export const BestsellerPage = () => {
  const dispatch = useDispatch();
  const bestsellerBooks = useSelector(
    (state: IState) => state.booksReducer.bestsellerBooks
  );
  const publishedDate = useSelector(
    (state: IState) => state.booksReducer.publishedDate
  );

  useEffect(() => {
    dispatch(getBestsellerBooks());
  }, []);

  return (
    <div className={styles.bestsellerPage}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bestsellerPage_title}>
            <Title text='The New York Times Best Sellers' />
            {bestsellerBooks.length >= 1 ? (
              <p>{`Published date: ${publishedDate}`}</p>
            ) : null}
          </div>
        </div>
        {bestsellerBooks.length >= 1 ? (
          bestsellerBooks.map((item: IBestSellerListProps) => {
            return (
              <BestsellerList
                display_name={item.display_name}
                books={item.books}
                key={item.display_name}
              />
            );
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

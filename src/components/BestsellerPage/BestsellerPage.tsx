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
  }, [bestsellerBooks, publishedDate]);

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
          <svg
            className={styles.bestsellerPage_filter}
            version='1.1'
            width='40'
            height='40'
            viewBox='0 0 256 256'
          >
            <g transform='translate(50 50) scale(1.72 1.72)'>
              <path
                d='M 52.537 80.466 V 45.192 L 84.53 2.999 C 85.464 1.768 84.586 0 83.041 0 H 6.959 C 5.414 0 4.536 1.768 5.47 2.999 l 31.994 42.192 v 43.441 c 0 1.064 1.163 1.719 2.073 1.167 l 11.758 -7.127 C 52.065 82.205 52.537 81.368 52.537 80.466 z'
                transform=' matrix(1 0 0 1 0 0) '
                strokeLinecap='round'
              />
            </g>
          </svg>
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

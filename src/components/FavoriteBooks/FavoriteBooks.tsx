import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IState } from '../../redux/store';
import { getFavoriteBooks } from '../../services/account';
import { FavoriteBookCard } from '../FavoriteBookCard/FavoriteBookCard';
import styles from '../FavoriteBooks/FavoriteBooks.module.css';

export const FavoriteBooks = () => {
  const history = useHistory();
  const favoriteBooks = useSelector(
    (state: IState) => state.accountReducer.favoriteBooks
  );
  const dispatch = useDispatch();
  const userId = useSelector((state: IState) => state.accountReducer.userName);

  useEffect(() => {
    dispatch(getFavoriteBooks(userId));
  }, [userId]);

  return (
    <div className={styles.favoriteBooks}>
      <div className={styles.container}>
        {favoriteBooks.length >= 1 ? (
          <div className={styles.favoriteBooks_wrapper}>
            {favoriteBooks.map((item) => (
              <FavoriteBookCard
                author={item.author}
                title={item.title}
                key={item.isbn}
                id={item.isbn}
                text={item.description}
                image={item.image}
                amazonHref={item.amazon}
              ></FavoriteBookCard>
            ))}
          </div>
        ) : (
          <p className={styles.favoriteBooks_empty}>
            There is not a single favorite book. You can add your favorite books
            in the "
            <span
              className={styles.favoriteBooks_empty_link}
              onClick={() => {
                history.push('/bestsellers');
              }}
            >
              Bestsellers books
            </span>
            ".
          </p>
        )}
      </div>
    </div>
  );
};

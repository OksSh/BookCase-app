import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { getFavoriteBooks } from '../../services/account';
import { FavoriteBookCard } from '../FavoriteBookCard/FavoriteBookCard';
import styles from '../FavoriteBooks/FavoriteBooks.module.css';
const [isEmptyBook, setiIsEmptyBook] = useState<boolean>(false);

export const FavoriteBooks = () => {
  const favoriteBooks = useSelector(
    (state: IState) => state.accountReducer.favoriteBooks
  );
  const dispatch = useDispatch();
  const userId = useSelector((state: IState) => state.accountReducer.userName);

  useEffect(() => {
    setiIsEmptyBook(
      Object.values(favoriteBooks[0]).every((item) => item === '')
    );
    dispatch(getFavoriteBooks(userId));
  }, [favoriteBooks]);

  return (
    <div className={styles.favoriteBooks}>
      <div className={styles.container}>
        {favoriteBooks.length >= 1 ? (
          <div className={styles.wrapper}>
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
        ) : null}
        {isEmptyBook ? (
          <p>
            There is not a single favorite book. You can add your favorite
            books.
          </p>
        ) : null}
      </div>
    </div>
  );
};

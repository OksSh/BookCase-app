import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksOffset } from '../../redux/actions/booksAction';
import { IBookCardProps } from '../../redux/reducers/booksReducer';
import { IState } from '../../redux/store';
import { getBooksList } from '../../services/bookList';
import { BookCard } from '../BookCard/BookCard';
import styles from '../BooksList/BooksList.module.css';
import { Preloader } from '../Preloader/Preloader';
import { SliderToggle } from '../SliderToggle/SliderToggle';
import { Title } from '../Title/Title';

export interface IBookCard {
  title: string;
  author: string;
  isbns: [{ isbn10: string; isbn13: string }];
}

export const BooksList = () => {
  const books = useSelector((state: IState) => state.booksReducer.books);
  const dispatch = useDispatch();
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const length = useSelector((state: IState) => state.booksReducer.booksLength);
  console.log(offset, length);

  useEffect(() => {
    dispatch(getBooksList(offset, length));
  }, [offset, length]);

  const onClickLeft = () => {
    if (offset > 20) {
      const newOffset = offset - 20;
      console.log(offset, newOffset);
      dispatch(booksOffset(newOffset));
    }
  };

  const onClickRight = () => {
    if (length > offset) {
      const newOffset = offset + 20;
      console.log(offset, newOffset);
      dispatch(booksOffset(newOffset));
    }
  };

  return (
    <div className={styles.bookList}>
      <div className={styles.container}>
        <div className={styles.bookList_titleWrapper}>
          <Title text='Books' />
          <SliderToggle onClickLeft={onClickLeft} onClickRight={onClickRight} />
        </div>
        <div className={styles.wrapper}>
          {books.length >= 1 ? (
            books.map((item: IBookCardProps) => {
              return (
                <BookCard
                  // id={item.isbns[0].isbn13}
                  id={item.title}
                  key={item.title}
                  title={item.title}
                  author={item.author}
                />
              );
            })
          ) : (
            <div className={styles.bookList_preloader}>
              <Preloader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

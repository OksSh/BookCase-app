import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooksOffset } from '../../redux/actions/booksAction';
import { IBookCardProps } from '../../redux/reducers/booksReducer';
import { IState } from '../../redux/store';
import { getBooks } from '../../services/bookList';
import { BookCard } from '../BookCard/BookCard';
import styles from '../BooksList/BooksList.module.css';
import { Input } from '../Input/Input';
import { Preloader } from '../Preloader/Preloader';
import { SliderToggle } from '../SliderToggle/SliderToggle';
import { Title } from '../Title/Title';

export const BooksList = () => {
  const books = useSelector((state: IState) => state.booksReducer.books);
  const dispatch = useDispatch();
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const length = useSelector((state: IState) => state.booksReducer.booksLength);

  useEffect(() => {
    dispatch(getBooks(offset, length));
  }, [offset, length]);

  const onClickLeft = useCallback(() => {
    if (offset > 20) {
      const newOffset = offset - 20;
      dispatch(setBooksOffset(newOffset));
    }
  }, [offset]);

  const onClickRight = useCallback(() => {
    if (length > offset) {
      const books: IBookCardProps[] = [];
      const newOffset = offset + 20;
      dispatch(setBooksOffset(newOffset));
    }
  }, [length, offset]);

  return (
    <div className={styles.bookList}>
      <div className={styles.container}>
        <div className={styles.bookList_titleWrapper}>
          <Title text='Books' />
          <SliderToggle onClickLeft={onClickLeft} onClickRight={onClickRight} />
          <Input name='Search' />
        </div>
        <div className={styles.wrapper}>
          {books.length >= 1 ? (
            books.map((item: IBookCardProps) => {
              return (
                <BookCard
                  id={item.id}
                  key={item.id}
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

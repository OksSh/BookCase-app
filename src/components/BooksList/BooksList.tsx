import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBookCardProps } from '../../redux/reducers/booksReducer';
import { IState } from '../../redux/store';
import { getBooks } from '../../services/bookList';
import { BookCard } from '../BookCard/BookCard';
import styles from '../BooksList/BooksList.module.css';
import { Input } from '../Input/Input';
import { Preloader } from '../Preloader/Preloader';
import { Spinner } from '../Spinner/Spinner';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import { Title } from '../Title/Title';
import { BooksSearch } from '../Search/BooksSearch';

export const BooksList = () => {
  const books = useSelector((state: IState) => state.booksReducer.books);
  const dispatch = useDispatch();
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const length = useSelector((state: IState) => state.booksReducer.booksLength);
  const backBooks = useSelector(
    (state: IState) => state.booksReducer.backBooks
  );
  const author = useSelector(
    (state: IState) => state.booksReducer.searchAuthor
  );
  const title = useSelector((state: IState) => state.booksReducer.searchTitle);

  useEffect(() => {
    dispatch(getBooks(offset, length, author, title));
  }, [offset, length]);

  return (
    <div className={styles.bookList}>
      <div className={styles.container}>
        <div className={styles.bookList_headerWrapper}>
          <div className={styles.bookList_title}>
            <Title text='Books' />
            {JSON.stringify(books) === JSON.stringify(backBooks) ? null : (
              <Spinner />
            )}
          </div>
          <div className={styles.bookList_slider}>
            <SliderButtons />
          </div>
          <BooksSearch />
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

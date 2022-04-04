import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBookCardProps, IBooksState } from '../../redux/reducers/booksReducer';
import { IState } from '../../redux/store';
import { getBooks } from '../../services/bookList';
import { BookCard } from '../BookCard/BookCard';
import styles from '../BooksList/BooksList.module.css';
import { Preloader } from '../Preloader/Preloader';
import { Spinner } from '../Spinner/Spinner';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import { Title } from '../Title/Title';
import { BooksSearch } from '../Search/BooksSearch';
import { Context } from '../../App';

export const BooksList = () => {
  const books = useSelector((state: IState) => state.booksReducer.books);
  const dispatch = useDispatch();
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const [isLoading, setIsLoading] = useState(false);
  const author = useSelector(
    (state: IState) => state.booksReducer.searchAuthor
  );
  const title = useSelector((state: IState) => state.booksReducer.searchTitle);
  const { theme } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getBooks(offset));
  }, [offset]);

  useEffect(() => {
    setIsLoading(false);
  }, [books, setIsLoading]);

  return (
    <div className={styles.bookList} style={theme}>
      <div className={styles.container}>
        <div className={styles.bookList_headerWrapper}>
          <div className={styles.bookList_title}>
            <Title text='Books' />
            {isLoading ? <Spinner /> : null}
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
                  text={item.description}
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

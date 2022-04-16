import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBooksOffset,
  setSearchAuthor,
  setSearchTitle,
} from '../../redux/actions/booksAction';
import styles from '../Search/BooksSearch.module.css';
import { Input } from '../Input/Input';
import { IState } from '../../redux/store';
import {
  getBooks,
  getSearchBooksByAuthor,
  getSearchBooksByTitle,
} from '../../services/bookList';
import { Context } from '../../App';

export const BooksSearch = () => {
  const [searchParam, setSearchParam] = useState<string>('author');
  const author = useSelector(
    (state: IState) => state.booksReducer.searchAuthor
  );
  const title = useSelector((state: IState) => state.booksReducer.searchTitle);
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const dispatch = useDispatch();
  const { theme } = useContext(Context);

  useEffect(() => {
    getSearchBooksByAuthor(author);
  }, [author]);

  useEffect(() => {
    getSearchBooksByTitle(title);
  }, [title]);

  useEffect(() => {
    dispatch(setBooksOffset(20));
  }, [title, author]);

  const onClickAuthor = useCallback(() => {
    setSearchParam('author');
  }, [searchParam]);

  const onClickTitle = useCallback(() => {
    setSearchParam('title');
  }, [searchParam]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (searchParam === 'author') {
        dispatch(setSearchAuthor(value));
      }
      if (searchParam === 'title') {
        dispatch(setSearchTitle(value));
      }
    },
    [searchParam, author, title]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (searchParam === 'author') {
          dispatch(setSearchTitle(''));
          dispatch(getSearchBooksByAuthor(author));
        }
        if (searchParam === 'title') {
          dispatch(setSearchAuthor(''));
          dispatch(getSearchBooksByTitle(title));
        }
      }
    },
    [searchParam, author, title]
  );

  const enterSearchParam = useCallback(() => {
    if (searchParam === 'author') {
      dispatch(setSearchTitle(''));
      dispatch(getSearchBooksByAuthor(author));
    }
    if (searchParam === 'title') {
      dispatch(setSearchAuthor(''));
      dispatch(getSearchBooksByTitle(title));
    }
  }, [searchParam, author, title]);

  const onClearSearch = useCallback(() => {
    dispatch(setSearchAuthor(''));
    dispatch(setSearchTitle(''));
    dispatch(setBooksOffset(20));
    dispatch(getBooks(offset));
  }, [offset]);

  return (
    <div className={styles.booksSearch}>
      <div className={styles.wrapper}>
        <div onClick={onClearSearch} className={styles.bookSearch_clear}>
          <svg
            style={theme}
            fill='#000000'
            viewBox='0 0 24 24'
            width='24px'
            height='24px'
          >
            <path d='M 2 2 L 4.9394531 4.9394531 C 3.1262684 6.7482143 2 9.2427079 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 6.486 17.514 2 12 2 L 12 4 C 16.411 4 20 7.589 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 9.7940092 4.9004767 7.7972757 6.3496094 6.3496094 L 9 9 L 9 2 L 2 2 z' />
          </svg>
        </div>
        <Input
          value={searchParam == 'author' ? `${author}` : `${title}`}
          placeholder={
            searchParam == 'author' ? 'Enter the author' : 'Enter the title'
          }
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div onClick={enterSearchParam}>
          <svg
            style={theme}
            fill='#000000'
            viewBox='0 0 30 30'
            width='30px'
            height='30px'
            className={styles.booksSearch_image}
          >
            <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z' />
          </svg>
        </div>
      </div>
      <div className={styles.booksSearch_params}>
        <p
          style={theme}
          onClick={onClickAuthor}
          className={
            searchParam == 'author'
              ? `${styles.booksSearch_params_isActive} ${styles.booksSearch_params_text}`
              : styles.booksSearch_params_text
          }
        >
          author
        </p>
        <p
          style={theme}
          onClick={onClickTitle}
          className={
            searchParam == 'title'
              ? `${styles.booksSearch_params_isActive} ${styles.booksSearch_params_text}`
              : styles.booksSearch_params_text
          }
        >
          title
        </p>
      </div>
    </div>
  );
};

import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setSearchAuthor,
  setSearchTitle,
} from '../../redux/actions/booksAction';
import styles from '../Search/BooksSearch.module.css';
import { Input } from '../Input/Input';

export const BooksSearch = () => {
  const [searchParam, setSearchParam] = useState<string>('author');
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const onClickAuthor = useCallback(() => {
    setSearchParam('author');
  }, [searchParam]);

  const onClickTitle = useCallback(() => {
    setSearchParam('title');
  }, [searchParam]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearch(value);
    },
    [search]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (searchParam === 'author') {
          dispatch(setSearchAuthor(search));
          console.log(search);
        }
        if (searchParam === 'title') {
          dispatch(setSearchTitle(search));
        }
      }
    },
    [search]
  );

  const enterSearchParam = useCallback(() => {
    if (searchParam === 'author') {
      dispatch(setSearchAuthor(search));
      console.log(search);
    }
    if (searchParam === 'title') {
      dispatch(setSearchTitle(search));
    }
  }, [search]);

  return (
    <div className={styles.booksSearch}>
      <div className={styles.wrapper}>
        <Input
          value={search}
          placeholder={
            searchParam == 'author' ? 'Enter the author' : 'Enter the title'
          }
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div onClick={enterSearchParam}>
          <svg
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
          onClick={onClickAuthor}
          className={
            searchParam == 'author' ? styles.booksSearch_params_isActive : ''
          }
        >
          author
        </p>
        <p
          onClick={onClickTitle}
          className={
            searchParam == 'title' ? styles.booksSearch_params_isActive : ''
          }
        >
          title
        </p>
      </div>
    </div>
  );
};

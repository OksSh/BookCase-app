import { IBooksState } from '../reducers/booksReducer';
import { ACTIONS } from './constants';

export const getBooksList = (books: IBooksState, booksLength: IBooksState) => {
  return {
    type: ACTIONS.GET_BOOKS_LIST,
    books: books,
    booksLength: booksLength,
  };
};

export const setBooksOffset = (value: number) => {
  return { type: ACTIONS.SET_BOOKS_OFFSET, offset: value };
};

export const setBackBooks = (books: IBooksState) => {
  return { type: ACTIONS.SET_BACK_BOOKS, backBooks: books };
};

export const setSearchAuthor = (value: string) => {
  return { type: ACTIONS.SET_SEARCH_AUTHOR, searchAuthor: value };
};

export const setSearchTitle = (value: string) => {
  return { type: ACTIONS.SET_SEARCH_TITLE, searchTitle: value };
};

export const setSearchWord = (value: number) => {
  return { type: ACTIONS.SET_SEARCH_OFFSET, searchOffset: value };
};

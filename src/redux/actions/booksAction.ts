import { IBestsellerBooks, IBooksState } from '../reducers/booksReducer';
import { ACTIONS } from './constants';

export const getBooksList = (books: IBooksState, booksLength: number) => {
  return {
    type: ACTIONS.GET_BOOKS_LIST,
    books: books,
    booksLength: booksLength,
  };
};

export const setBooksOffset = (value: number) => {
  return { type: ACTIONS.SET_BOOKS_OFFSET, offset: value };
};

export const setSearchAuthor = (value: string) => {
  return { type: ACTIONS.SET_SEARCH_AUTHOR, searchAuthor: value };
};

export const setSearchTitle = (value: string) => {
  return { type: ACTIONS.SET_SEARCH_TITLE, searchTitle: value };
};

export const getBestsellerBookList = (
  books: IBestsellerBooks,
  date: string
) => {
  return {
    type: ACTIONS.GET_BESTSELLER_BOOK_LIST,
    bestsellerBooks: books,
    publishedDate: date,
  };
};

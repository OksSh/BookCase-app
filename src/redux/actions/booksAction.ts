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

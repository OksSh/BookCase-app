import { IBooksState } from '../reducers/booksReducer';
import { ACTIONS } from './constants';

export const booksList = (value: IBooksState) => {
  return { type: ACTIONS.GET_BOOKS_LIST, books: value };
};

export const booksOffset = (value: number) => {
  return { type: ACTIONS.BOOKS_OFFSET, offset: value };
};

export const booksLength = (value: number) => {
  return { type: ACTIONS.BOOKS_LENGTH, length: value };
};

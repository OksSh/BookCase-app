import { ACTIONS } from '../actions/constants';

export interface IBookCardProps {
  title: string;
  author: string;
  id: string;
}

export interface IBooksState {
  books: IBookCardProps[];
  booksOffset: number;
  booksLength: number;
}

const defaultStateBooks: IBooksState = {
  books: [],
  booksOffset: 20,
  booksLength: 0,
};

export const booksReducer = (state = defaultStateBooks, action: any) => {
  if (action.type === ACTIONS.GET_BOOKS_LIST) {
    return { ...state, books: action.books };
  }

  if (action.type === ACTIONS.BOOKS_OFFSET) {
    return { ...state, booksOffset: action.offset };
  }

  if (action.type === ACTIONS.BOOKS_LENGTH) {
    return { ...state, booksLength: action.length };
  }

  return state;
};

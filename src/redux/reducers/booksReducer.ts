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

export const defaultStateBooks: IBooksState = {
  books: [],
  booksOffset: 20,
  booksLength: 0,
};

export const booksReducer = (state = defaultStateBooks, action: any) => {
  if (action.type === ACTIONS.GET_BOOKS_LIST) {
    return { ...state, books: action.books, booksLength: action.booksLength };
  }

  if (action.type === ACTIONS.SET_BOOKS_OFFSET) {
    return { ...state, booksOffset: action.offset };
  }

  return state;
};

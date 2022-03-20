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
  backBooks: IBookCardProps[];
  searchAuthor: string;
  searchTitle: string;
  searchOffset: number;
}

export const defaultStateBooks: IBooksState = {
  books: [],
  booksOffset: 20,
  booksLength: 0,
  backBooks: [],
  searchAuthor: '',
  searchTitle: '',
  searchOffset: 20,
};

export const booksReducer = (state = defaultStateBooks, action: any) => {
  if (action.type === ACTIONS.GET_BOOKS_LIST) {
    return { ...state, books: action.books, booksLength: action.booksLength };
  }

  if (action.type === ACTIONS.SET_BOOKS_OFFSET) {
    return { ...state, booksOffset: action.offset };
  }

  if (action.type === ACTIONS.SET_BACK_BOOKS) {
    return { ...state, backBooks: action.backBooks };
  }

  if (action.type === ACTIONS.SET_SEARCH_AUTHOR) {
    return { ...state, searchAuthor: action.searchAuthor };
  }

  if (action.type === ACTIONS.SET_SEARCH_TITLE) {
    return { ...state, searchTitle: action.searchTitle };
  }

  if (action.type === ACTIONS.SET_SEARCH_OFFSET) {
    return { ...state, searchWord: action.searchOffset };
  }

  return state;
};

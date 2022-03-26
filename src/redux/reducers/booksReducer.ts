import { IBestSellerListProps } from '../../components/BestsellerList/BestsellerList';
import { ACTIONS } from '../actions/constants';

export interface IBookCardProps {
  title: string;
  author: string;
  description: string;
  id: string;
}

export interface IBestsellerBooks {
  display_name: string;
  books: [];
}

export interface IBooksState {
  books: IBookCardProps[];
  booksOffset: number;
  booksLength: number;
  searchAuthor: string;
  searchTitle: string;
  searchOffset: number;
  bestsellerBooks: IBestSellerListProps[];
  publishedDate: string;
}

export const defaultStateBooks: IBooksState = {
  books: [],
  booksOffset: 20,
  booksLength: 0,
  searchAuthor: '',
  searchTitle: '',
  searchOffset: 20,
  bestsellerBooks: [],
  publishedDate: '',
};

export const booksReducer = (state = defaultStateBooks, action: any) => {
  if (action.type === ACTIONS.GET_BOOKS_LIST) {
    return { ...state, books: action.books, booksLength: action.booksLength };
  }

  if (action.type === ACTIONS.SET_BOOKS_OFFSET) {
    return { ...state, booksOffset: action.offset };
  }

  if (action.type === ACTIONS.SET_SEARCH_AUTHOR) {
    return { ...state, searchAuthor: action.searchAuthor };
  }

  if (action.type === ACTIONS.SET_SEARCH_TITLE) {
    return { ...state, searchTitle: action.searchTitle };
  }

  if (action.type === ACTIONS.GET_BESTSELLER_BOOK_LIST) {
    return {
      ...state,
      bestsellerBooks: action.bestsellerBooks,
      publishedDate: action.publishedDate,
    };
  }

  return state;
};

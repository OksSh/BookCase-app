import { ACTIONS } from '../actions/constants';

export interface IFavoriteBooksProps {
  isbn: string;
  image: string;
  title: string;
  author: string;
  description: string;
  amazon: string;
}

export interface IQuoteProps {
  title: string;
  author: string;
  text: string;
  id: string;
}

export interface IAccountState {
  userName: string;
  email: string;
  favoriteBooks: IFavoriteBooksProps[];
  quotes: IQuoteProps[];
}

const defaultAccountState: IAccountState = {
  userName: '',
  email: '',
  favoriteBooks: [],
  quotes: [],
};

export const accountReducer = (state = defaultAccountState, action: any) => {
  if (action.type === 'SET_USER_ACCOUNT') {
    return { ...state, userName: action.userName, email: action.email };
  }

  if (action.type === 'GET_USER_ACCOUNT') {
    return { ...state, userName: action.userName, email: action.email };
  }

  if (action.type === ACTIONS.SET_FAVORITE_BOOKS) {
    return { ...state, favoriteBooks: action.favoriteBooks };
  }

  if (action.type === ACTIONS.SET_QUOTES) {
    return { ...state, quotes: action.quotes };
  }

  return state;
};

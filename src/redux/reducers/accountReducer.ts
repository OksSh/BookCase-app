import { ACTIONS } from '../actions/constants';

export interface IFavoriteBooksProps {
  isbn: string;
  image: string;
  title: string;
  author: string;
  description: string;
  amazon: string;
}

export interface IAccountState {
  userName: string;
  email: string;
  favoriteBooks: IFavoriteBooksProps[];
}

const defaultAccountState: IAccountState = {
  userName: '',
  email: '',
  favoriteBooks: [],
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

  return state;
};

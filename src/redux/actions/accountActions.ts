import { IFavoriteBooksProps } from '../reducers/accountReducer';
import { ACTIONS } from './constants';

export const setUserAccount = (userName: string, email: string) => {
  return { type: ACTIONS.SET_USER_ACCOUNT, userName: userName, email: email };
};

export const getUserAccount = (userName: string, email: string) => {
  return { type: ACTIONS.SET_USER_ACCOUNT, userName: userName, email: email };
};

export const setFavoriteBooks = (favoriteBooks: IFavoriteBooksProps) => {
  return { type: ACTIONS.SET_FAVORITE_BOOKS, favoriteBooks: favoriteBooks };
};

import { Dispatch } from 'redux';
import {
  getUserAccount,
  setFavoriteBooks,
  setQuotes,
  setUserAccount,
} from '../redux/actions/accountActions';
import {
  IFavoriteBooksProps,
  IQuoteProps,
} from '../redux/reducers/accountReducer';

export const setUser = (userName: string, email: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        books: [
          {
            isbn: '',
            image: '',
            title: '',
            author: '',
            description: '',
            amazon: '',
          },
        ],
        quotes: [{ title: '', author: '', date: '' }],
        userName: userName,
        email: email,
        id: userName,
      }),
    });

    dispatch(setUserAccount(userName, email));
  };
};

export const getUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3005/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    dispatch(getUserAccount(results.userName, results.email));
  };
};

export const addFavoriteBook = (
  favoriteBooks: IFavoriteBooksProps[],
  userId: string,
  author: string,
  title: string,
  id: string,
  text: string,
  image: string,
  amazonHref: string
) => {
  return async (dispatch: Dispatch) => {
    const updatedFavoriteBooks = [
      ...favoriteBooks,
      {
        isbn: id,
        image: image,
        title: title,
        author: author,
        description: text,
        amazon: amazonHref,
      },
    ];

    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        books: updatedFavoriteBooks,
      }),
    });

    const results = await response.json();

    dispatch(setFavoriteBooks(results.books));
  };
};

export const deleteFavoriteBook = (
  favoriteBooks: IFavoriteBooksProps[],
  userId: string,
  id: string
) => {
  const updatedFavoriteBooks = favoriteBooks.filter((item) => item.isbn !== id);

  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ books: updatedFavoriteBooks }),
    });

    const results = await response.json();
    dispatch(setFavoriteBooks(results.books));
  };
};

export const getFavoriteBooks = (userId: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();

    dispatch(setFavoriteBooks(results.books));
  };
};

export const addQuote = (
  quotes: IQuoteProps[],
  author: string,
  title: string,
  text: string,
  userId: string
) => {
  return async (dispatch: Dispatch) => {
    const updatedQuotes = [
      ...quotes,
      {
        title: title,
        author: author,
        text: text,
      },
    ];

    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quotes: updatedQuotes,
      }),
    });

    const results = await response.json();

    const quotesWithId = results.quotes.map((item: IQuoteProps) => ({
      ...item,
      id: 'id' + Math.random().toString(16).slice(2),
    }));

    dispatch(setQuotes(quotesWithId));
  };
};

export const getQuotes = (userId: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();

    dispatch(setQuotes(results.quotes));
  };
};

export const deleteQuote = (
  quotes: IQuoteProps[],
  userId: string,
  id: string
) => {
  const updatedQuotes = quotes.filter((item) => item.id !== id);

  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3005/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quotes: updatedQuotes }),
    });

    const results = await response.json();
    dispatch(setQuotes(results.quotes));
  };
};

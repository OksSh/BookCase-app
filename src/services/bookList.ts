import { Dispatch } from 'redux';
import { getBooksList } from '../redux/actions/booksAction';
import { key } from '../services/constants';

export const getBooks = (offset: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${key}&offset=${offset}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );

    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    const books = result.results.map(
      (item: { title: string; author: string }) => ({
        id: 'id' + Math.random().toString(16).slice(2),
        ...item,
      })
    );

    dispatch(getBooksList(books, result.num_results));
  };
};

export const getSearchBooksByAuthor = (author: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${key}&author=${author}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );

    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    const books = result.results.map(
      (item: { title: string; author: string }) => ({
        id: 'id' + Math.random().toString(16).slice(2),
        ...item,
      })
    );

    dispatch(getBooksList(books, 20));
  };
};

export const getSearchBooksByTitle = (title: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${key}&title=${title}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );

    console.log(response);

    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    const books = result.results.map(
      (item: { title: string; author: string }) => ({
        id: 'id' + Math.random().toString(16).slice(2),
        ...item,
      })
    );

    dispatch(getBooksList(books, 20));
  };
};

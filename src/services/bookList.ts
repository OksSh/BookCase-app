import { Dispatch } from 'redux';
import { booksLength, booksList } from '../redux/actions/booksAction';
import { key } from '../services/constants';

export const getBooksList = (offset: number, length: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${key}&offset=${offset}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );

    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    dispatch(booksList(result.results));
    dispatch(booksLength(result.num_results));
  };
};

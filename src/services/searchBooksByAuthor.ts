import { Dispatch } from 'redux';
import { getBooksList } from '../redux/actions/booksAction';
import { key } from '../services/constants';

export const getSearchBooksByAuthor = (
  search: string,
  offset: number,
  length: number
) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${key}&offset=${offset}&author=${search}`,
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

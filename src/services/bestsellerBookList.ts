import { Dispatch } from 'redux';
import { getBestsellerBookList } from '../redux/actions/booksAction';
import { key } from '../services/constants';

export const getBestsellerBooks = () => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${key}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
    const data = await response.json();

    if (response.ok === false) {
      throw data;
    }

    dispatch(
      getBestsellerBookList(data.results.lists, data.results.published_date)
    );
  };
};

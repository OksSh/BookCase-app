import { Dispatch } from 'redux';
import { setBookReviews } from '../redux/actions/booksAction';
import { key } from '../services/constants';

export const getBookReviews = (isbn: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3//reviews.json?isbn=${isbn}&api-key=${key}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );

    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    dispatch(setBookReviews(result.results));
  };
};

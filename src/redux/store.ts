import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { booksReducer, IBooksState } from './reducers/booksReducer';

export interface IState {
  booksReducer: IBooksState;
}

export const store = createStore(
  combineReducers({ booksReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

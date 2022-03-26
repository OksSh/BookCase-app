import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { booksReducer, IBooksState } from './reducers/booksReducer';
import { IUserState, userReducer } from './reducers/userReducer';

export interface IState {
  booksReducer: IBooksState;
  userReducer: IUserState;
}

export const store = createStore(
  combineReducers({ booksReducer, userReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

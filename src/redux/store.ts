import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { accountReducer, IAccountState } from './reducers/accountReducer';
import { booksReducer, IBooksState } from './reducers/booksReducer';
import { IUserState, userReducer } from './reducers/userReducer';

export interface IState {
  booksReducer: IBooksState;
  userReducer: IUserState;
  accountReducer: IAccountState;
}

export const store = createStore(
  combineReducers({ booksReducer, userReducer, accountReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

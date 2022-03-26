import { ACTIONS } from '../actions/constants';

export interface IUserState {
  isLogin: boolean;
  error: any;
}

const defaultUserState: IUserState = {
  isLogin: false,
  error: null,
};

export const userReducer = (state = defaultUserState, action: any) => {
  if (action.type === ACTIONS.SET_USER_LOGIN) {
    return { ...state, isLogin: action.isLogin };
  }
  return state;
};

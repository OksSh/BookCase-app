import { ACTIONS } from '../actions/constants';

export interface IUserState {
  isLogin: boolean;
}

const defaultUserState: IUserState = {
  isLogin: false,
};

export const userReducer = (action: any, state = defaultUserState) => {
  if (action.type === ACTIONS.SET_USER_LOGIN) {
    return { ...state, isLogin: action.isLogin };
  }
  return state;
};

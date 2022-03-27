import { ACTIONS } from '../actions/constants';

export interface IUserState {
  isLogin: boolean;
  error: any;
  userName: string;
  email: string;
  id: number;
}

const defaultUserState: IUserState = {
  isLogin: false,
  error: null,
  userName: '',
  email: '',
  id: 0,
};

export const userReducer = (state = defaultUserState, action: any) => {
  if (action.type === ACTIONS.LOGIN_FAIL) {
    return { ...state, error: action.error };
  }

  if (action.type === ACTIONS.LOGIN_SUCCESS) {
    return {
      ...state,
      id: action.id,
      userName: action.userName,
      email: action.email,
      isLogin: true,
    };
  }

  if (action.type === ACTIONS.REGISTER_FAIL) {
    return { ...state, error: action.error };
  }

  if (action.type === ACTIONS.REGISTER_SUCCESS) {
    return {
      ...state,
      userName: action.userName,
      email: action.Email,
      id: action.id,
      isLogin: true,
    };
  }

  return state;
};

import { ACTIONS } from './constants';

export const setUserLogin = (value: boolean) => {
  return { type: ACTIONS.SET_USER_LOGIN, isLogin: value };
};

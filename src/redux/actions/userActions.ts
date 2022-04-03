import { ACTIONS } from './constants';

export interface IProfileTypes {
  userName: string;
  email: string;
  id: number;
  isLogin: boolean;
}

export const registerFail = (error: any) => {
  return { type: ACTIONS.REGISTER_FAIL, error: error };
};

export const registerSuccess = (profile: IProfileTypes) => {
  return { type: ACTIONS.REGISTER_SUCCESS, profile: profile };
};

export const loginSuccess = (profile: IProfileTypes) => {
  return { type: ACTIONS.LOGIN_SUCCESS, profile: profile };
};

export const loginFail = (error: any) => {
  return { type: ACTIONS.LOGIN_FAIL, error: error };
};

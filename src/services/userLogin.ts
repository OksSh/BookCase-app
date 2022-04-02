import { Dispatch } from 'redux';
import { getUserAccount } from '../redux/actions/accountActions';
import { loginFail, loginSuccess } from '../redux/actions/userActions';
import { refreshFetch } from './helpers';

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(
    'https://studapi.teachmeskills.by/auth/jwt/create/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const result = await response.json();

  if (response.ok === false) {
    throw result;
  }

  return result;
};

export const getProfile = async () => {
  const access = localStorage.getItem('access');
  const response = await refreshFetch(
    'https://studapi.teachmeskills.by/auth/users/me/'
  );

  const result = response.json();

  if (response.ok === true) {
    return result;
  }

  if (response.ok === false) {
    throw result;
  }
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { access, refresh } = await loginUser(email, password);
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      const profile = await getProfile();
      dispatch(loginSuccess(profile));
      dispatch(getUserAccount(profile.username, profile.email));
    } catch (error: any) {
      dispatch(loginFail(error));
    }
  };
};

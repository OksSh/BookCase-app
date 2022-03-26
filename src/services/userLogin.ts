import { Dispatch } from 'redux';

export const userLogin = async (email: string, password: string) => {
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

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {};
};

import { Dispatch } from 'redux';
import { registerFail, registerSuccess } from '../redux/actions/userActions';

export const register = (userName: string, email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        'https://studapi.teachmeskills.by/auth/users/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: userName,
            email: email,
            password: password,
          }),
        }
      );

      const result = await response.json();

      if (response.ok === false) {
        throw result;
      }

      if (response.ok === true) {
        dispatch(registerSuccess(result));
      }
    } catch (error: any) {
      dispatch(registerFail(error));
    }
  };
};

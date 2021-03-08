import { UserAuth } from 'services/api';

export const validateUser = (dispatch: React.Dispatch<any> | any): any => {
  dispatch({ type: 'VALIDATE_USER' });
  return UserAuth.validate().subscribe((result: any) => {
    const { status, response } = result;
    if (status === 200 && response.auth) {
      dispatch({
        type: 'VALIDATE_SUCCESS',
        payload: { isAuthenticated: response.auth },
      });
    } else {
      dispatch({
        type: 'VALIDATE_ERROR',
        payload: { error: response?.message || 'Error occured' },
      });
    }
  });
};

export const logout = (dispatch: Function): void => {
  dispatch({ type: 'LOGOUT' });
};

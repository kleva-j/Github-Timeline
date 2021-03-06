type Iuser = {
  username: string;
};

export interface IState {
  user: Iuser | null;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: null | string;
}

export const initialState: IState = {
  user: null,
  token: '',
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
    case 'VALIDATE_USER':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };

    case 'VALIDATE_SUCCESS': {
      const { isAuthenticated } = action.payload;
      return {
        ...state,
        loading: false,
        isAuthenticated,
      };
    }

    case 'VALIDATE_ERROR': {
      const { error } = action.payload;
      return {
        ...state,
        error,
        loading: false,
      };
    }

    case 'LOGOUT':
      return {
        ...state,
        user: '',
        token: '',
      };

    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

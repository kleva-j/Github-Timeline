import { UserInterface } from 'contexts/UserContext';

export const initialState: UserInterface = {
  loading: false,
  currentUser: undefined,
  isAuthenticated: false,
  error: null,
  theme: {},
};

export const UserReducer = (state = initialState, _action: any) => state;

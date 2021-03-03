import React, { createContext, useReducer, useContext } from 'react';

import { initialState, UserReducer } from 'reducers/user';

export interface UserInterface {
  currentUser: User | undefined;
  loading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  theme?: any;
}

type User = {
  username: string | undefined;
};

export const UserStateContext = createContext<UserInterface>(initialState);
export const UserDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

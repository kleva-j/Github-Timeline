import React, { createContext, useContext, useReducer } from 'react';

import { AuthReducer, initialState, IState } from 'reducers/auth';

export const AuthStateContext = createContext<IState>(initialState);
export const AuthDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  // console.log(context, 'Check here')
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

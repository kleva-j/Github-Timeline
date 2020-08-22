import * as React from 'react';

import { Jobs } from '../services/Auth/https/https';
import { reducer } from '../reducers';

// type IUseFetchHook = {
//   jobs: item[];
//   loading: boolean;
//   error: Error;
// };

// type item = {
//   name: string;
// };

export const UseFetch = (params = {}, page = 1): { jobs: any } => {
  const [, dispatch] = React.useReducer(reducer, {
    jobs: [],
    loading: true,
    error: false,
  });

  Jobs.searchByTerms('javascript', { ...params, page }).subscribe(console.log, (err: Error) =>
    dispatch({ type: 'ERROR', payload: err }),
  );
  return {
    jobs: [],
  };
};

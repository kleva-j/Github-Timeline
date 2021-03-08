import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

// import { AuthStateContext, AuthDispatchContext } from 'contexts/AuthContext';
// import { UserStateContext, UserDispatchContext } from 'contexts/UserContext';

// import * as userR from 'reducers/user';
// import * as authR from 'reducers/auth';

// const { initialState: authState } = authR;
// const { initialState: userState } = userR;

export const waitForData = () => new Promise((res) => setTimeout(res, 0));

// interface IConfig {
//   mocks?: MockedResponse[];
//   providerProps?: any;
// }

// export const dispatch = jest.fn();

// const defaultProviderProps = {
//   auth: { ...authState },
//   user: { ...userState },
// };

// export const renderWithContext = (UI: JSX.Element, config: IConfig) => {
//   const { mocks = [], providerProps = defaultProviderProps } = config;
//   return {
//     ...render(
//       <AuthStateContext.Provider {...providerProps.auth}>
//         <AuthDispatchContext.Provider value={dispatch}>
//           <UserStateContext.Provider {...providerProps.user}>
//             <UserDispatchContext.Provider value={dispatch}>
//               <MockedProvider mocks={mocks} addTypename={false}>
//                 {UI}
//               </MockedProvider>
//             </UserDispatchContext.Provider>
//           </UserStateContext.Provider>
//         </AuthDispatchContext.Provider>
//       </AuthStateContext.Provider>,
//     ),
//   };
// };

export const customRender = (UI: JSX.Element, mocks?: MockedResponse[]) => {
  return {
    ...render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {UI}
      </MockedProvider>,
    ),
  };
};

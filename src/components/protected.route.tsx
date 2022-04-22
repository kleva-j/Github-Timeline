import React from 'react';
// import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

// import { useAuthState } from 'contexts/AuthContext';

// interface Props extends RouteProps {
//   component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
// }

// export const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuthState();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

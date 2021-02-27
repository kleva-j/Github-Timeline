import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import auth from '../services/auth';

interface Props extends RouteProps {
  component: any;
}

export const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

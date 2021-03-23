import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from 'components/protected.route';

import { useAuthDispatch } from 'contexts/AuthContext';

import { validateUser } from 'actions/auth';

import { Timeline } from 'views/Timeline';
import { Login } from 'views/Login';
import { Jobs } from 'views/Jobs';

const App: React.FC = () => {
  const dispatch = useAuthDispatch();
  useEffect(() => {
    const userEvent = validateUser(dispatch);
    return () => {
      userEvent.unsubscribe();
    };
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Github Timeline</title>
        <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL} />
      </Helmet>
      <Switch>
        <Redirect exact from="/" to="/timeline" />
        <ProtectedRoute exact path="/timeline" component={Timeline} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
    </>
  );
};

export default App;

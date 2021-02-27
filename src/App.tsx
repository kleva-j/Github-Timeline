import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

/* Import Components */
import { ProtectedRoute } from './components/protected.route';

/* Import Views */
import { Timeline } from './views/Timeline';
import { Login } from './views/Login';
import { Jobs } from './views/Jobs';

const App: React.FC = () => {
  return (
    <>
      {/* Page header goes here!!! */}
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

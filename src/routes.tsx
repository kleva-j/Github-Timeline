import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GithubJobs } from './components/Jobs';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/jobs" component={GithubJobs} />
        <Route component={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  );
};

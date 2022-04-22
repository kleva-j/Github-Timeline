import { Redirect, Route, Switch } from 'react-router-dom';
import { GraphQLJobs } from 'views/GraphqlJobs';
import { NotFound } from 'views/404';
import { Login } from 'views/Login';

const App: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/jobs" />
    <Route exact path="/jobs" component={GraphQLJobs} />
    <Route exact path="/login" component={Login} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default App;

// Required React Components
import React from 'react';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';

// Required Dependencies
import Landing from './landing.jsx';
import ResultsList from './resultsList.jsx';
import ResourceContainer from './resourceContainer.jsx';
import Login from './login.jsx';
import Submit from './submit.jsx';
import Admin from './admin.jsx';
import Profile from './profile.jsx';
import Main from './main.jsx';
import User from './user.jsx';

const App = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/main' component={Main}>
      <Route path='/main/results' component={ResultsList} />
      <Route path='/login' component={Login} />
      <Route path='/submit' component={Submit} />
    </Route>
    <Route path='/resource/:id' component={ResourceContainer} />
    <Route path='/user' component={User}>
      <Route path='/user/profile' component={Profile} />
      <Route path='/user/admin' component = {Admin} />
    </Route>
  </Router>
);

export default App;

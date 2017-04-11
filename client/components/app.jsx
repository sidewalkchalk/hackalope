// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';

// Required Modules
import Main from './main.jsx';
import ResultsList from './resultsList.jsx';
import Resource from './resource.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import Submit from './submit.jsx';
import Admin from './admin.jsx';
import Profile from './profile.jsx';

const App = (props) => (
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <Route path='/results' component={ResultsList} />
      <Route path='/results/:id' component={Resource} />
      <Route path='/login' component={Login} />
      <Route path='/submit' component={Submit} />
      <Route path='/profile' component={Profile} />
      <Route path='/admin' component = {Admin} />
    </Route>
  </Router>
);

export default App;

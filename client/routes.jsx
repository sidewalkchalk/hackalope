import { Route, browserHistory, Redirect } from 'react-router';
import React from 'react';

import App from './components/app.jsx';
import Main from './components/main.jsx';
import LogIn from './components/login.jsx';
import SignUp from './components/signup.jsx';
import ResultsList from './components/resultsList.jsx';
import Resource from './components/resource.jsx';
import Profile from './components/profile.jsx';
import Submit from './components/submit.jsx';
import Admin from './components/admin.jsx';


const routes = (
  <Route>
    <Route path="/" component={Main} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/results" component={ResultsList} />
    <Route path="/:resultId" component={Resource} />
    <Route path="/:user" component={Profile} />
    <Route path="/submit" component={Submit} />
    <Route path="/admin" component={Admin} />
  </Route>
);

export default routes;

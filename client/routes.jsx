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
    <Route path = '/' component = {Main}></Route>
    <Route path = '/login' component = {LogIn}></Route>
    <Route path = '/signup' component = {SignUp}></Route>
    <Route path = '/results' component = {ResultsList}></Route>
    <Route path = '/:resultId' component = {Resource}></Route>
    <Route path = '/:user' component = {Profile}></Route>
    <Route path = '/submit' component = {Submit}></Route>
    <Route path = '/admin' component = {Admin}></Route>
  </Route>
);

export default routes;

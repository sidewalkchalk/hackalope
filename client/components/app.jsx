// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Modules
import Main from './main.jsx';
import Nav from './nav.jsx';
import routes from '../routes.jsx';
import ResultsList from './resultsList.jsx';
import Result from './result.jsx'
import Resource from './resource.jsx';
import SignUp from './signup.jsx';
import Submit from './submit.jsx';
import Login from './login.jsx';

const App = (props) => (
  <Router history={hashHistory}>
      <Route path='/' component={Main} >
      <Route path='/results' component={ResultsList} />
      <Route path='/resource' component={Resource} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/submit' component={Submit} />
    </Route>
  </Router>
);

const mapStateToProps = (state) => {
  return {
    testreducer : state.testreducer,
    dispatch : state.dispatch
  };
};

export default connect (mapStateToProps)(App);

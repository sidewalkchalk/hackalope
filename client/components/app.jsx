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

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <MuiThemeProvider>
      <Router history={hashHistory}>
          <Route path='/' component={Main} >
          <Route path='results' component={ResultsList} />
        </Route>
      </Router>
      </MuiThemeProvider>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    testreducer : state.testreducer,
    dispatch : state.dispach
  };
};

export default connect (mapStateToProps)(App);

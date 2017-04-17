// Required React Components
import React from 'react';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

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
import { findUser } from '../helpers/helpers.js';
import { checkAuth } from '../actions/index.js';

class App extends React.Component {
  constructor (props) {
    super (props)
  };

  componentDidMount () {
    this.props.dispatch(checkAuth({checkingAuth: true}));
    findUser(this.props.user, this.props.dispatch)
  };

  render () {
    return this.props.user.checkingAuth ? null : (
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
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);

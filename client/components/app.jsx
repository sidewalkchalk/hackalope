// REACT/REDUX
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// COMPONENTS
import Landing from './landing.jsx';
import ResultsList from './resultsList.jsx';
import ResourceContainer from './resourceContainer.jsx';
import Login from './login.jsx';
import Submit from './submit.jsx';
import Admin from './admin.jsx';
import Profile from './profile.jsx';
import Main from './main.jsx';
import User from './user.jsx';

// ACTIONS AND HELPERS
import { findUser } from '../helpers/authHelpers';
import { checkAuth } from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(checkAuth({ checkingAuth: true }));
    findUser(this.props.user, this.props.dispatch);
  }

  render() {
    const routes = (
      <div>
        <Route path="/" component={Landing} />
        <Route path="/main" component={Main}>
          <Route path="/main/results" component={ResultsList} />
          <Route path="/login" component={Login} />
          <Route path="/submit" component={Submit} />
        </Route>
        <Route path="/resource/:id" component={ResourceContainer} />
        <Route path="/user" component={User}>
          <Route path="/user/profile" component={Profile} />
          <Route path="/user/admin" component={Admin} />
        </Route>
      </div>
    );

    return this.props.user.checkingAuth ? null : (
      <Router history={hashHistory}>
        {routes}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);

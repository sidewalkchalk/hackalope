import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink, BrowserRouter } from 'react-router';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Router history = {hashHistory}>
        <div>
          <Route path = '/' component = {Main}></Route>
          <Route path = '/login' component = {LogIn}></Route>
          <Route path = '/signup' component = {SignUp}></Route>
          <Route path = '/results' component = {ResultsList}></Route>
          <Route path = '/:resultId' component = {ResultDetail}></Route>
          <Route path = '/:user' component = {Profile}></Route>
          <Route path = '/submit' component = {Submit}></Route>
        </div>
      </Router>
    )
  }
}

export default App;

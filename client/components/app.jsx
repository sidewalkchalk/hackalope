import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink, BrowserRouter } from 'react-router';
import routes from '../routes.jsx';
import { Provider } from 'react-redux';
import { store } from '../store.jsx';
import Main from 'main.jsx';
 
class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Main />
    );
  }
}

export default App;

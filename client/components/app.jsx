import React from 'react';
import { store } from '../store.jsx';
import Main from './main.jsx';
import Nav from './nav.jsx';
import routes from '../routes.jsx';


import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

class App extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
       <Provider store = {store} >
         <Router history = {hashHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;

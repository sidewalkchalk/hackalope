// Required React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';

// Required Modules
import store  from './store.jsx';
import Routes from './routes.jsx';
import App from './components/app.jsx';
import ResultsList from './components/resultsList.jsx';
import Main from './components/main.jsx';
import Nav from './components/nav.jsx';

// this is the new index that is a jsx for redux and has the <Provider>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);

//store.suscribe(render);
App.contextTypes = { store: React.PropTypes.object };

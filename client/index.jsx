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

// this is the new index that is a jsx for redux and has the <Provider>

ReactDOM.render(

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/results' component={ResultsList} />
    </Router>
  </Provider>,

  document.getElementById('app')
);


//store.suscribe(render);
App.contextTypes = { store: React.PropTypes.object };

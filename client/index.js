import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../store.jsx';
import routes from '../routes.jsx';


import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(

 <Provider store = {store} >
	 <Router history = {hashHistory}>
	    {routes}
	  </Router>
  </Provider>
	, document.getElementById('app'));

store.suscribe(render);




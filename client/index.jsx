// Required React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Required Modules
import store  from './store.jsx';
import routes from './routes.jsx';
import App from './components/app.jsx';

// this is the new index that is a jsx for redux and has the <Provider>

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);


//store.suscribe(render);
App.contextTypes = { store: React.PropTypes.object };

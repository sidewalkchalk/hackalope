// Required React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Required Modules
import configureStore from './store.jsx';
import App from './components/app.jsx';

// this is the new index that is a jsx for redux and has the <Provider>
async function init(){
  const store = await configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('app'),
  );
}

init();

// store.suscribe(render);
App.contextTypes = { store: React.PropTypes.object };

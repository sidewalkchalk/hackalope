
import React from 'react';
import ReactDOM from 'react-dom';
import store  from './store.jsx';
import routes from './routes.jsx';
import App from './components/app.jsx';
import { Provider } from 'react-redux';

// this is the new index that is a jsx for redux and has the <Provider>

ReactDOM.render(

 <Provider store={store}>
   <App />
 </Provider>,

  document.getElementById('app')
);


store.suscribe(render);

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store.jsx';
import routes from './routes.jsx';
import App from './components/app.jsx';




ReactDOM.render(<App />, document.getElementById('app'));

store.suscribe(render);




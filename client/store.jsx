import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/rootReducer.jsx';

// initialize store and initialize redux dev tools
const store = createStore(
  rootReducer,
  undefined,
  compose(
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

persistStore(store);
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;

// For deployment, remove redux dev tools extension from compose function.
// Then remove function call before export statement. This will ensure that
// the app will work on all browsers.

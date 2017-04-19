import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/rootReducer.jsx';

// initialize store and initialize redux dev tools
const store = createStore(
  rootReducer,
  undefined,
  compose(
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // will need to remove to work in browser without redux tools
  ),
);

persistStore(store);
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;

import { compose, createStore, combineReducers} from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/rootReducer.jsx';

// initialize store and initialize redux dev tools
const store = createStore(
  rootReducer,
  undefined,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;

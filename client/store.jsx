import { compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { localStorage } from 'redux-persist/storages';
import rootReducer from './reducers/rootReducer.jsx';

// initialize store and initialize redux dev tools
// this is done as a promise authentication to enable
// authenticaion check when app component loads

export default function configureStore () {
  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
        rootReducer,
        undefined,
        compose(
          autoRehydrate(),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
      );

      persistStore(
        store,
        {storage: localStorage},
        () => resolve(store)
      )
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    } catch (e){
      reject(e)
    }
  });
};

// For deployment, remove redux dev tools extension from compose function.
// Then remove function call before export statement. This will ensure that
// the app will work on all browsers.

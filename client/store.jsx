
import { createStore, combineReducers, applyMiddleware } from 'redux';
import activeResult from './reducers/activeResult.js'
import testreducer from './reducers/testreducer.jsx';
import buckysresults from './reducers/buckysresults.jsx';
import { reducer as formReducer } from 'redux-form';
//link to reducers
//import FILL_ME_IN from './reducers/FILL_ME_IN.jsx';

const combinedReducers = combineReducers({
	 test: testreducer,
   results: buckysresults,
   result: activeResult

});
//applyMidleware(ReduxPromise)?

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;


import { createStore, combineReducers} from 'redux';
import activeResult from './reducers/activeResult.js'
import testreducer from './reducers/testreducer.jsx';
import buckysresults from './reducers/buckysresults.jsx';
import authReducer from './reducers/authreducer.jsx';
//link to reducers
//import FILL_ME_IN from './reducers/FILL_ME_IN.jsx';

const combinedReducers = combineReducers({
	 test: testreducer,
   results: buckysresults,
   result: activeResult,
   user: authReducer

});

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;

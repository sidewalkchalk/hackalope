import { createStore, combineReducers} from 'redux';
import activeResult from './reducers/activeResult.js'
import testreducer from './reducers/testreducer.jsx';
import buckysresults from './reducers/buckysresults.jsx';
import authReducer from './reducers/authreducer.jsx';
import submissionReducer from './reducers/submissionReducer.jsx';
import searchReducer from './reducers/searchReducer.jsx';


// combine all reducers
const combinedReducers = combineReducers({
	 test: testreducer,
   results: buckysresults,
   result: activeResult,
   user: authReducer,
	 submission: submissionReducer,
	 search: searchReducer
});

// initialize store and initialize redux dev tools
const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;

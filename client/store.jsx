
import { createStore, combineReducers } from 'redux';

import testreducer from './reducers/testreducer.jsx';
import buckysresults from './reducers/buckysresults.jsx';
//link to reducers
//import FILL_ME_IN from './reducers/FILL_ME_IN.jsx';

const combinedReducers = combineReducers({
	 test: testreducer,
   results: buckysresults

});


const store = createStore(combinedReducers);

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;

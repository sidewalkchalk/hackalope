import { combineReducers } from 'redux';
import activeResult from './activeResult.jsx';
import authReducer from './authreducer.jsx';
import submissionReducer from './submissionReducer.jsx';
import searchReducer from './searchReducer.jsx';
import dialogReducer from './dialogReducer.jsx';
import commentsReducer from './commentsReducer.jsx';
import resultsReducer from './resultsReducer.jsx';
import commentReducer from './commentReducer.jsx';
import unapprovedReducer from './unapprovedReducer.jsx';
import profileReducer from './profileReducer.jsx';
import snackbarReducer from './snackbarReducer.jsx';

// combine all reducers
const appReducer = combineReducers({
  results: resultsReducer,
  result: activeResult,
  user: authReducer,
	 submission: submissionReducer,
	 search: searchReducer,
	 dialogs: dialogReducer,
   comments: commentsReducer,
   comment: commentReducer,
   unapproved: unapprovedReducer,
   profile: profileReducer,
   snackbar: snackbarReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

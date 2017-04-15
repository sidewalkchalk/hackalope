import { combineReducers } from 'redux';
import activeResult from './activeResult.jsx'
import authReducer from './authreducer.jsx';
import submissionReducer from './submissionReducer.jsx';
import searchReducer from './searchReducer.jsx';
import dialogReducer from './dialogReducer.jsx';
import commentsReducer from './commentsReducer.jsx';
import resultsReducer from './resultsReducer.jsx';
import addCommentReducer from './addCommentReducer.jsx';
import unapprovedReducer from './unapprovedReducer.jsx';

const appReducer = combineReducers({
  results: resultsReducer,
  result: activeResult,
  user: authReducer,
  submission: submissionReducer,
  search: searchReducer,
  dialogs: dialogReducer,
  comments: commentsReducer,
  comment: addCommentReducer,
  unapproved: unapprovedReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  };
  return appReducer(state, action);
};

export default rootReducer;

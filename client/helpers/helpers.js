import * as actions from '../actions/index.js';
import axios from 'axios';

// AUTHENTICATION HELPERS
// close login popup
export const handleLoginClose = (dispatch) => {
  dispatch(actions.logInDialog({login: false}));
};

// handle request for authentication
export const login = (e, user, dispatch) => {
  e.preventDefault();
  handleLoginClose(dispatch);
  axios.post('/auth/login', user)
    .then( response => {
      var userData = response.data
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(userData));
    })
    .catch ( err => {
      console.error(err)
    })
};

// close signup popup
export const handleSignUpClose = (dispatch) => {
  dispatch(actions.signUpDialog({signup: false}));
};

// handle request to create new account
export const signup = (e, user, dispatch) => {
  e.preventDefault();
  handleSignUpClose(dispatch);
  axios.post('/auth/signup', user)
    .then( response => {
      var newUser = response.data
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(newUser));
    })
    .catch ( err => {
      console.error(err)
    })
};

// NEW SUBMISSIONS
// open submission dialog
export const handleSubmitOpen = (dispatch) => {
  dispatch(actions.submitDialog({submit: true}));
};

// close submission dialog
export const handleSubmitClose = (dispatch) => {
  dispatch(actions.submitDialog({submit: false}));
};

// correct casing on submission tags
export const titleCase = (str) => {
    return str.replace(/\w\S*/g,
      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
      .split(', ');
};

// post new submission to the server
export const submit = (e, user, submission, dispatch) => {
  var tagArray = titleCase(submission.tags);

  e.preventDefault();
  var newEntry = {
    user: user._id,
    title: submission.title,
    url: submission.url,
    description: submission.description,
    language: submission.language,
    tags: tagArray
  };
  axios.post('/submit', newEntry)
    .then( response => {
      console.log(response);
      dispatch(actions.submitDialog({submit: false}));
      dispatch(actions.clearSubmissionData());
    })
    .catch ( err => {
      console.error(err)
    })
};

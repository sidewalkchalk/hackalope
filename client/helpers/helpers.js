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

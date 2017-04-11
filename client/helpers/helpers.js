import * as actions from '../actions/index.js';
import axios from 'axios';

// AUTHENTICATION HELPERS

export const handleLoginClose = (dispatch) => {
  dispatch(actions.logInDialog({login: false}));
};
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

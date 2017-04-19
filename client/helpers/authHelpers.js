import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';

export const handleLoginOpen = (dispatch) => {
  dispatch(actions.logInDialog({ login: true }));
};

// close login popup
export const handleLoginClose = (dispatch) => {
  dispatch(actions.logInDialog({ login: false }));
};

export const reloadResources = (search, dispatch) => {
  handleSearch(search.query, dispatch);
};

// handle request for authentication
export const login = (e, user, search, dispatch) => {
  e.preventDefault();
  handleLoginClose(dispatch);
  axios.post('/auth/login', user)
    .then((response) => {
      const userData = response.data;
      // change the store to add the name, username, admin, _id, favorites
      return Promise.all([
        dispatch(actions.selectUser(userData)),
        snackbar.openLoggedInSnackbar(dispatch)])
          .then((resolve) => {
            if (window.location.hash === '#/main/results') {
              return Promise.all([reloadResources(search, dispatch)])
              .then((resolve) => {
                console.log(resolve);
              })
              .catch((err) => {
                console.error(err);
              });
            }
          });
    })
    .catch((err) => {
      console.error(err);
    });
};

// open signup popup
export const handleSignUpOpen = (dispatch) => {
  dispatch(actions.signUpDialog({ signup: true }));
};

// close signup popup
export const handleSignUpClose = (dispatch) => {
  dispatch(actions.signUpDialog({ signup: false }));
};

// handle request to create new account
export const signup = (e, user, dispatch) => {
  e.preventDefault();
  handleSignUpClose(dispatch);
  axios.post('/auth/signup', user)
    .then((response) => {
      const newUser = response.data;
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(newUser));
      hashHistory.push('/main');
    })
    .catch((err) => {
      console.error(err);
    });
};

// destroy session and remove user from store
export const logout = (dispatch) => {
  axios.post('/auth/logout')
  .then((response) => {
    hashHistory.push('/');

    dispatch(actions.logout());
    snackbar.openLoggedOutSnackbar(dispatch);
  })
  .catch((err) => {
    console.log(err);
  });
};

export const findUser = (user, dispatch) => {
  if (!user._id) {
    axios.get('/profile/user')
    .then((response) => {
      dispatch(actions.selectUser(response.data));
      dispatch(actions.checkAuth({ checkingAuth: false }));
    })
    .catch((err) => {
      dispatch(actions.checkAuth({ checkingAuth: false }));
    });
  }
};

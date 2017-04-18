import * as actions from '../actions/index.js';
import React from 'react';

// open logged in snackbar
export const openLoggedInSnackbar = (dispatch) => {
  dispatch(actions.loginSnackbar({login: true}));
};

// close logged in snackbar
export const closeLoggedInSnackbar = (dispatch) => {
  dispatch(actions.loginSnackbar({login: false}));
};

// open logged out snackbar
export const openLoggedOutSnackbar = (dispatch) => {
  dispatch(actions.logoutSnackbar({logout: true}));
};

// close logged out snackbar
export const closeLoggedOutSnackbar = (dispatch) => {
  dispatch(actions.logoutSnackbar({logout: false}));
};

// open admin snackbar
export const openAdminSnackbar = (dispatch) => {
  dispatch(actions.adminSnackbar({admin: true}));
};

// close admin snackbar
export const closeAdminSnackbar = (dispatch) => {
  dispatch(actions.adminSnackbar({admin: false}));
};

// open new submission snackbar
export const openSubmitSnackbar = (dispatch) => {
  dispatch(actions.submitSnackbar({submit: true}));
};

// close new submission snackbar
export const closeSubmitSnackbar = (dispatch) => {
  dispatch(actions.submitSnackbar({submit: false}));
};

// open approved snackbar
export const openApprovedSnackbar = (dispatch) => {
  dispatch(actions.approveSnackbar({approved: true}));
};

// close approved snackbar
export const closeApprovedSnackbar = (dispatch) => {
  dispatch(actions.approveSnackbar({approved: false}));
};

// open unapproved snackbar
export const openUnapprovedSnackbar = (dispatch) => {
  dispatch(actions.unapproveSnackbar({unapproved: true}));
};

// close unapproved snackbar
export const closeUnapprovedSnackbar = (dispatch) => {
  dispatch(actions.unapproveSnackbar({unapproved: false}));
};

// open pending resource reviews snackbar
export const openPendingSnackbar = (dispatch) => {
  dispatch(actions.pendingSnackbar({pending: true}));
};

// close pending resource reviews snackbar
export const closePendingSnackbar = (dispatch) => {
  dispatch(actions.pendingSnackbar({pending: false}));
};

export const openNotAuthSnackbar = (dispatch) => {
  dispatch(actions.notAuthSnackbar({notAuth: true}));
};

//close not authorized snackbar
export const closeNotAuthSnackbar = (dispatch) => {
  dispatch(actions.notAuthSnackbar({notAuth: false}));
};

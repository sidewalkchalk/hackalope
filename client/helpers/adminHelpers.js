import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';

// handles approving an unapproved resource
export const approveResource = (resultId, dispatch) => {
  axios.put('/admin', { resultId })
  .then((response) => {
    getUnapproved(dispatch);
    snackbar.openApprovedSnackbar(dispatch);
  })
  .catch((err) => {
    console.error(err);
  });
};

// deletes a resource deemeed unapproved
export const unapproveResource = (resultId, dispatch) => {
  axios.delete('/admin', { data: { resultId } })
  .then((response) => {
    getUnapproved(dispatch);
    snackbar.openUnapprovedSnackbar(dispatch);
  })
  .catch((err) => {
    console.error(err);
  });
};

// fetches unapproved resources up for review
export const getUnapproved = (dispatch) => {
  axios.get('/admin/')
  .then((responses) => {
    dispatch(actions.unapprovedResources(responses.data));
  })
  .catch((err) => {
    console.error(err);
  });
};

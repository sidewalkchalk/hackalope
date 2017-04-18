import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js'
import axios from 'axios';
import React from 'react';

// open submission dialog
export const handleSubmitOpen = (dispatch) => {
  dispatch(actions.submitDialog({submit: true}));
};

// close submission dialog
export const handleSubmitClose = (dispatch) => {
  dispatch(actions.submitDialog({submit: false}));
  dispatch(actions.clearSubmissionData());
};

// correct casing on submission tags
export const titleCaseArray = (str) => {
  if (!str) {
    return;
  }
  return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
    .split(', ');
};

// post new submission to the server
export const submit = (e, user, submission, dispatch) => {
  e.preventDefault();
  dispatch(actions.submissionData({loading: true}))

  submission.tags = titleCaseArray(submission.tags);

  axios.post('/submit', submission)
    .then( response => {
      console.log("Submit Response: ", response);
      dispatch(actions.submitDialog({submit: false}));
      dispatch(actions.clearSubmissionData());
      snackbar.openSubmitSnackbar(dispatch);
    })
    .catch ( err => {
      console.error(err)
    })
};

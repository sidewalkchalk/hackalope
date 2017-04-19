import React from 'react';
import axios from 'axios';
import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js';
import UnapprovedResource from '../components/unapprovedResource.jsx';

// fetches unapproved resources up for review
export const getUnapproved = (dispatch) => {
  axios.get('/admin/')
  .then((response) => {
    dispatch(actions.unapprovedResources(response.data));
  })
  .catch((err) => {
    console.error(err);
  });
};

// handles approving an unapproved resource
export const approveResource = (resultId, dispatch) => {
  axios.put('/admin', { resultId })
  .then(() => {
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
  .then(() => {
    getUnapproved(dispatch);
    snackbar.openUnapprovedSnackbar(dispatch);
  })
  .catch((err) => {
    console.error(err);
  });
};

// handle rendering of unapproved resources
export const renderUnapproved = (unapproved) => unapproved.map((resource, index) =>
  <div
    key={resource._id}
    style={{ zDepth: 10 }}
  >
    <UnapprovedResource key={resource._id} resource={resource} index={index}/>
  </div>
);

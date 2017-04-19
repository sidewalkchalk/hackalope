import axios from 'axios';
import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js';

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

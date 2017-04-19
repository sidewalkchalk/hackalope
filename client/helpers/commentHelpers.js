import * as actions from '../actions/index.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';

// get all comments on a resource
export const getComments = (resultId, dispatch) => {
  axios.get(`/comments/${resultId}`)
    .then((response) => {
      // set the comments in the store using dispatch
      dispatch(actions.commentsByResource(response.data));
      hashHistory.push(`/resource/${resultId}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

// get all comments for a user
export const getUserComments = (userId, dispatch) => {
  axios.get(`/comments/${userId}`)
    .then((response) => {
      dispatch(actions.commentsByUser(response.data));
    })
    .catch((err) => {
      console.error(err);
    });
};

// add a new comment on a resource
export const addComment = (e, user, result, comment, dispatch) => {
  e.preventDefault();
  const newComment = {
    user: user._id,
    body: comment.body,
    resource: result._id,
  };
  axios.post('/comments', newComment)
    .then((response) => {
      getComments(result._id, dispatch);
    })
    .catch((err) => {
      console.error(err);
    });
};

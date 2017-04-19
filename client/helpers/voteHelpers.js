import * as actions from '../actions/index.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';

// handles user click to vote on a resource
export const handleVote = (resourceId, votes, newVote, dispatch) => {
  dispatch(actions.updateVote(resourceId, votes, newVote));
  axios.post(`/votes/${resourceId}`, newVote)
    .then((response) => {
      const updatedResource = response.data;
      dispatch(actions.updateResource(updatedResource));
    })
    .catch((err) => {
      console.error(err);
    });
};

// return bool for status of upvote button
export const isUpvoted = (user, result, votes) => {
  let upvoted = false;
  if (user._id && votes) {
    votes.forEach((vote) => {
      if (vote.resource === result._id && vote.vote === 1) {
        upvoted = true;
      }
    });
  }
  return upvoted;
};

// return bool for status of downvote button
export const isDownvoted = (user, result, votes) => {
  let downvoted = false;
  if (user._id && votes) {
    votes.forEach((vote) => {
      if (vote.resource === result._id && vote.vote === -1) {
        downvoted = true;
      }
    });
  }
  return downvoted;
};

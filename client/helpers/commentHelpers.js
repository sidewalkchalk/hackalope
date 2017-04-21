import axios from 'axios';
import { hashHistory } from 'react-router';
import * as actions from '../actions/index.js';

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

export const getProfile = (dispatch) => {
  axios.get('/profile/')
  .then((response) => {
    dispatch(actions.userProfile(response.data));
    hashHistory.push('/user/profile');
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
    .then(() => {
      getComments(result._id, dispatch);
    })
    .catch((err) => {
      console.error(err);
    });
};

// delete a users comments
export const deleteComment = (commentId, userId, dispatch) => {
  axios.delete('/comments', { data: { commentId } })
  .then((response) => {
    // reload users comments
    getProfile(dispatch);
      // creates action to trash comment
    // dispatch(actions.trashComment(commentId))
  })
    .catch((err) => {
      console.error(err);
    });
};

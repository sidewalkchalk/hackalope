import axios from 'axios';
import { hashHistory } from 'react-router';
import * as actions from '../actions/index.js';

// gets user profile info on sign in
export const getProfile = (dispatch) => {
  axios.get('/profile/')
  .then((responses) => {
    dispatch(actions.userProfile(responses.data));
    hashHistory.push('/user/profile');
  })
  .catch((err) => {
    console.error(err);
  });
};

// handles user click to favorite or unfavorite a resource
export const handleCheck = (id) => {
  axios.put('/profile/favorites', id)
  .catch((err) => {
    console.error(err);
  });
};

// adds default check to resources user has favorited
export const isFavorite = (user, result) => user._id ? user.favorites.includes(result._id) : false;

import * as actions from '../actions/index.js';
import axios from 'axios';

/*--------------------------------
  AUTHENTICATION
--------------------------------*/
// open login popup
export const handleLoginOpen = (dispatch) => {
  dispatch(actions.logInDialog({login: true}));
};

// close login popup
export const handleLoginClose = (dispatch) => {
  dispatch(actions.logInDialog({login: false}));
};

// handle request for authentication
export const login = (e, user, dispatch) => {
  e.preventDefault();
  handleLoginClose(dispatch);
  axios.post('/auth/login', user)
    .then( response => {
      var userData = response.data
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(userData));
    })
    .catch ( err => {
      console.error(err)
    })
};

// open signup popup
export const handleSignUpOpen = (dispatch) => {
  dispatch(actions.signUpDialog({signup: true}));
};

// close signup popup
export const handleSignUpClose = (dispatch) => {
  dispatch(actions.signUpDialog({signup: false}));
};

// handle request to create new account
export const signup = (e, user, dispatch) => {
  e.preventDefault();
  handleSignUpClose(dispatch);
  axios.post('/auth/signup', user)
    .then( response => {
      var newUser = response.data
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(newUser));
    })
    .catch ( err => {
      console.error(err)
    })
};

// destroy session and remove user from store
export const logout = (dispatch) => {
  axios.post('/auth/logout')
  .then( response => {
    console.log(response)
    dispatch(actions.clearUser());
  })
  .catch (err => {
    console.log(error);
  });
};

/*--------------------------------
  NEW SUBMISSIONS
--------------------------------*/

// open submission dialog
export const handleSubmitOpen = (dispatch) => {
  dispatch(actions.submitDialog({submit: true}));
};

// close submission dialog
export const handleSubmitClose = (dispatch) => {
  dispatch(actions.submitDialog({submit: false}));
};

// correct casing on submission tags
export const titleCaseArray = (str) => {
    return str.replace(/\w\S*/g,
      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
      .split(', ');
};

// post new submission to the server
export const submit = (e, user, submission, dispatch) => {
  var tagArray = titleCaseArray(submission.tags);

  e.preventDefault();
  var newEntry = {
    user: user._id,
    title: submission.title,
    url: submission.url,
    description: submission.description,
    language: submission.language,
    tags: tagArray
  };
  axios.post('/submit', newEntry)
    .then( response => {
      console.log(response);
      dispatch(actions.submitDialog({submit: false}));
      dispatch(actions.clearSubmissionData());
    })
    .catch ( err => {
      console.error(err)
    })
};

/*--------------------------------
  SEARCH FOR RESOURCES
--------------------------------*/
// set title case for searchTerm
export const titleCase = (str) => {
    return str.replace(/\w\S*/g,
      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// search the database for resources
export const handleSearch = (value, dispatch) => {
  value.term = titleCase(value.term);
  axios.post('/', value)
    .then (response => {
      dispatch(actions.clearSearch());
      dispatch(actions.searchResults(response.data))
    })
    .catch( err => {
      console.error(err)
    });
};

/*--------------------------------
  FAVORITES
--------------------------------*/
// handles user click to favorite or unfavorite a resource
export const handleCheck = (id) => {
  axios.put('/profile/favorites', id)
    .then (response => {
      console.log(response);
    })
    .catch (err => {
      console.error(err)
    });
};

// adds default check to resources user has favorited
export const isFavorite = (user, result) => {
  return user._id ? user.favorites.includes(result._id) : false
};

/*--------------------------------
  COMMENTS
--------------------------------*/
// get all comments on a resource
export const getComments = (resultId, dispatch) => {
  axios.get('/comments/' + resultId)
    .then (response => {
      console.log(response);
      // set the comments in the store using dispatch
      dispatch(actions.commentsByResource(response.data))
    })
    .catch (err => {
      console.error(err);
    });
};


// add a new comment on a resource
export const addComment = (e, user, result, comment, dispatch) => {
  e.preventDefault();
  var newComment = {
      user: user._id,
      body: comment.body,
      resource: result._id,
  };
  console.log(newComment);
  axios.post('/comments', newComment)
    .then( response => {
      console.log(response);
      getComments(result._id, dispatch)
    })
    .catch ( err => {
      console.error(err)
  })
/*--------------------------------
  ADMIN 
--------------------------------*/
// handles approving an unapproved resource
export const approveResource = () =>  {

};

// fetches unapproved resources up for review
export const getUnapproved = () => {


};

import * as actions from '../actions/index.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';
import Result from '../components/result.jsx';

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
  if (!str) {
    return;
  }
  return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
    .split(', ');
};

// post new submission to the server
export const submit = (e, user, submission, preview, dispatch) => {
  var tagArray = titleCaseArray(submission.tags);
  var config = {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Expose-Headers': '*',
      'Access-Control-Allow-Origin': '*'
    },
  };

  axios.get('http://api.linkpreview.net/?key=58eff68ba74a41677ff8f43415db89c2157e0f9e042aa&q=' + submission.url, config)
    .then( res => {
      preview = {
        description: res.data.description,
        image: res.data.image,
        title: res.data.title,
        url: res.data.url
      };
      console.log("Site preview: ", preview);
    })
    .then(() => {
      var newEntry = {
        user: user._id,
        title: preview.title,
        url: preview.url,
        description: preview.description,
        language: submission.language,
        tags: tagArray,
        image: preview.image
      };
      axios.post('/submit', newEntry)
        .then( response => {
          console.log("Submit Response: ", response);
          dispatch(actions.submitDialog({submit: false}));
          dispatch(actions.clearSubmissionData());
        })
        .catch ( err => {
          console.error(err)
        })
      })
    .catch( err => {
      console.error(err)
    })

  e.preventDefault();
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
export const handleSearch = (value, dispatch, results) => {
  value.term = titleCase(value.term);
  axios.post('/', value)
    .then (response => {
      Promise.all([dispatch(actions.clearSearch()),
        dispatch(actions.searchResults(response.data))])
          .then(results => {
            hashHistory.push('/results');
          })
    })
    .catch( err => {
      console.error(err)
    });
};

export const renderResults = (results, dispatch) => {
  return results.resources.map( result => {

    return (
      <div key = {result._id}
        onClick={() => dispatch(actions.selectResult(result))}
        style={{zDepth: 10}}
      >
        <Result key = {result.id} result = {result} />
      </div>
    );
  });
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

// get all comments for a user
export const getUserComments = (userId, dispatch) => {
  axios.get('/comments/' + userId)
    .then (response => {
      console.log(response);
      dispatch(actions.commentsByUser(response.data))
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
  };

/*--------------------------------
  ADMIN
--------------------------------*/
// handles approving an unapproved resource
export const approveResource = (resultId, dispatch) =>  {
  axios.put('/admin', {resultId: resultId})
  .then( response => {
    console.log(response);
    getUnapproved(dispatch);
  })
  .catch( err => {
    console.error(err);
  });
};

// deletes a resource deemeed unapproved
export const unapproveResource = (resultId, dispatch) => {
  axios.delete('/admin', {data: {resultId: resultId}})
  .then( response => {
    console.log(response);
    getUnapproved(dispatch);
  })
  .catch(err => {
    console.error(err);
  });
};

// fetches unapproved resources up for review
export const getUnapproved = (dispatch) => {
  axios.get('/admin/')
  .then( responses => {
    console.log(responses);
    dispatch(actions.unapprovedResources(responses.data));
  })
  .catch( err => {
    console.error(err);
  });
};

/*--------------------------------
  FAVORITES
--------------------------------*/
//gets user profile info on sign in
export const getProfile = (dispatch) => {
  axios.get('/profile/')
  .then( responses => {
    console.log(responses);
    dispatch(actions.userProfile(responses.data));
    hashHistory.push('/profile');
  })
  .catch( err => {
    console.error(err);
  });
};

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
  VOTES
--------------------------------*/
// handles user click to vote on a resource
export const handleVote = (resourceId, votes, newVote, dispatch) => {
  dispatch(actions.updateVote(resourceId, votes, newVote));
  axios.post('/votes/' + resourceId, newVote)
    .then(response => {
      console.log(response);
      var updatedResource = response.data;
      dispatch(actions.updateResource(updatedResource));
    })
    .catch(err => {
      console.error(err);
    })
}

// return bool for status of upvote button
export const isUpvoted = (user, result, votes) => {
  var upvoted = false;
  if (user._id) {
    votes.forEach(vote => {
      if (vote.resource === result._id && vote.vote === 1) {
        upvoted = true;
      };
    });
  };
  return upvoted;
};

// return bool for status of downvote button
export const isDownvoted = (user, result, votes) => {
  var downvoted = false;
  if (user._id) {
    votes.forEach(vote => {
      if (vote.resource === result._id && vote.vote === -1) {
        downvoted = true;
      };
    });
  };
  return downvoted;
};


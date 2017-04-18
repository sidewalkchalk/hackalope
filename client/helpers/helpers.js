import * as actions from '../actions/index.js';
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export const checkImgIcon = result => {
  if (!result.image) {
    let letter = result.title.charAt(0).toUpperCase();
    return (
      <div style={{background: "rgb(188, 188, 188)", width: 40, height: 40, lineHeight: '40px', textAlign: 'center'}}>
        <font color='white' size='5'>
          {letter}
        </font>
      </div>
    )
  } else {
    return <img src={`${result.image}`} width="40" />
  }
}

//open not authorized snackbar
export const openNotAuthSnackbar = (dispatch) => {
  dispatch(actions.notAuthSnackbar({notAuth: true}));
};

//close not authorized snackbar
export const closeNotAuthSnackbar = (dispatch) => {
  dispatch(actions.notAuthSnackbar({notAuth: false}));
};

// progress bar
export const submitProgress = (submission) => {
  if (submission.loading) {
    return (
      <div style={{paddingTop: 10}}>
        <LinearProgress mode="indeterminate" />
      </div>
    )
  }
}

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
      openSubmitSnackbar(dispatch);
    })
    .catch ( err => {
      console.error(err)
    })
};
<<<<<<< HEAD

/*--------------------------------
  SEARCH FOR RESOURCES
--------------------------------*/
// set title case for searchTerm
export const titleCase = (str) => {
    return str.replace(/\w\S*/g,
      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

export const buildQuery = (value) => {
  return value.term ?
    'language=' + value.language + '&term=' + value.term :
    'language=' + value.language;
};

// search the database for resources
export const handleSearch = (query, dispatch) => {
  query.term = titleCase(query.term);
  // store the current search query
  dispatch(actions.searchQuery(query))
  // build query string and search
  query = buildQuery(query);
  axios.get('/search?' + query)
    .then (response => {
      dispatch(actions.clearSearch()),
      dispatch(actions.searchResults(response.data, ))
      hashHistory.push('/main/results');
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
      // set the comments in the store using dispatch
      dispatch(actions.commentsByResource(response.data))
      hashHistory.push('/resource/' + resultId)
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
    openApprovedSnackbar(dispatch);
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
    openUnapprovedSnackbar(dispatch);
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
    dispatch(actions.userProfile(responses.data));
    hashHistory.push('/user/profile');
  })
  .catch( err => {
    console.error(err);
  });
};

// handles user click to favorite or unfavorite a resource
export const handleCheck = (id) => {
  axios.put('/profile/favorites', id)
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
      var updatedResource = response.data;
      dispatch(actions.updateResource(updatedResource));
    })
    .catch(err => {
      console.error(err);
    })
};

// return bool for status of upvote button
export const isUpvoted = (user, result, votes) => {
  var upvoted = false;
  if (user._id && votes) {
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
  if (user._id && votes) {
    votes.forEach(vote => {
      if (vote.resource === result._id && vote.vote === -1) {
        downvoted = true;
      };
    });
  };
  return downvoted;
};

/*--------------------------------
  SNACKBARS - located in nav component
--------------------------------*/
// open logged in snackbar
export const openLoggedInSnackbar = (dispatch) => {
  dispatch(actions.loginSnackbar({login: true}));
};

// close logged in snackbar
export const closeLoggedInSnackbar = (dispatch) => {
  dispatch(actions.loginSnackbar({login: false}));
};

// open logged out snackbar
export const openLoggedOutSnackbar = (dispatch) => {
  dispatch(actions.logoutSnackbar({logout: true}));
};

// close logged out snackbar
export const closeLoggedOutSnackbar = (dispatch) => {
  dispatch(actions.logoutSnackbar({logout: false}));
};

// open admin snackbar
export const openAdminSnackbar = (dispatch) => {
  dispatch(actions.adminSnackbar({admin: true}));
};

// close admin snackbar
export const closeAdminSnackbar = (dispatch) => {
  dispatch(actions.adminSnackbar({admin: false}));
};

// open new submission snackbar
export const openSubmitSnackbar = (dispatch) => {
  dispatch(actions.submitSnackbar({submit: true}));
};

// close new submission snackbar
export const closeSubmitSnackbar = (dispatch) => {
  dispatch(actions.submitSnackbar({submit: false}));
};

// open approved snackbar
export const openApprovedSnackbar = (dispatch) => {
  dispatch(actions.approveSnackbar({approved: true}));
};

// close approved snackbar
export const closeApprovedSnackbar = (dispatch) => {
  dispatch(actions.approveSnackbar({approved: false}));
};

// open unapproved snackbar
export const openUnapprovedSnackbar = (dispatch) => {
  dispatch(actions.unapproveSnackbar({unapproved: true}));
};

// close unapproved snackbar
export const closeUnapprovedSnackbar = (dispatch) => {
  dispatch(actions.unapproveSnackbar({unapproved: false}));
};

// open pending resource reviews snackbar
export const openPendingSnackbar = (dispatch) => {
  dispatch(actions.pendingSnackbar({pending: true}));
};

// close pending resource reviews snackbar
export const closePendingSnackbar = (dispatch) => {
  dispatch(actions.pendingSnackbar({pending: false}));
};

/*--------------------------------
  ICON result helpers
--------------------------------*/

>>>>>>> loading progress on submit form
export const checkImgIcon = result => {
  if (!result.image) {
    let letter = result.title.charAt(0).toUpperCase();
    return (
      <div style={{background: "rgb(188, 188, 188)", width: 40, height: 40, lineHeight: '40px', textAlign: 'center'}}>
        <font color='white' size='5'>
          {letter}
        </font>
      </div>
    )
  } else {
    return <img src={`${result.image}`} width="40" />
  }
}

//open not authorized snackbar

=======
>>>>>>> pre rebase

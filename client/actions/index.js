/*--------------------------------
  AUTH/USER
--------------------------------*/

export const selectUser = user => ({
  type: 'STORE_USER',
  user,
});

export const checkAuth = checkingAuth => ({
  type: 'CHECK_AUTH',
  checkingAuth,
});

export const userFormData = userFormData => ({
  type: 'USER_FORM_DATA',
  userFormData,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const userProfile = profile => ({
  type: 'USER_PROFILE',
  profile,
});

export const clearUser = () => ({
  type: 'CLEAR_USER',
});

/*--------------------------------
  COMMENTS
--------------------------------*/

export const newComment = comment => ({
  type: 'ADD_COMMENT',
  comment,
});

export const commentsByResource = comments => ({
  type: 'COMMENTS_RESOURCE',
  comments,
});

export const trashComment = comment => ({
  type: 'DELETE_COMMENT',
  comment,
});

/*--------------------------------
  DIALOGS
--------------------------------*/

export const signUpDialog = dialogs => ({
  type: 'SIGNUP_DIALOG_OPEN',
  dialogs,
});

export const submitDialog = dialogs => ({
  type: 'SUBMIT_DIALOG_OPEN',
  dialogs,
});

export const logInDialog = dialogs => ({
  type: 'LOGIN_DIALOG_OPEN',
  dialogs,
});

/*--------------------------------
  SEARCHES/RESULTS
--------------------------------*/

export const selectResult = result => ({
  type: 'RESULT_SELECTED',
  result,
});

export const searchTerm = search => ({
  type: 'SEARCH_TERM',
  search,
});

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
});

export const searchResults = results => ({
  type: 'SEARCH_RESULTS',
  results,
});

export const searchQuery = query => ({
  type: 'STORE_QUERY',
  query,
});

export const resultsLoaded = loaded => ({
  type: 'RESULTS_LOADED',
  loaded,
});

/*--------------------------------
  SNACKBARS
--------------------------------*/

export const loginSnackbar = snackbar => ({
  type: 'LOGIN_SNACKBAR_OPEN',
  snackbar,
});

export const logoutSnackbar = snackbar => ({
  type: 'LOGOUT_SNACKBAR_OPEN',
  snackbar,
});

export const adminSnackbar = snackbar => ({
  type: 'ADMIN_SNACKBAR_OPEN',
  snackbar,
});

export const submitSnackbar = snackbar => ({
  type: 'SUBMIT_SNACKBAR_OPEN',
  snackbar,
});

export const approveSnackbar = snackbar => ({
  type: 'APPROVE_SNACKBAR_OPEN',
  snackbar,
});

export const unapproveSnackbar = snackbar => ({
  type: 'UNAPPROVE_SNACKBAR_OPEN',
  snackbar,
});

export const pendingSnackbar = snackbar => ({
  type: 'PENDING_SNACKBAR_OPEN',
  snackbar,
});

export const notAuthSnackbar = snackbar => ({
  type: 'NOT_LOGGED_IN_SNACKBAR_OPEN',
  snackbar,
});

/*--------------------------------
  SUBMISSIONS
--------------------------------*/

export const submissionData = submission => ({
  type: 'USER_SUBMISSION_DATA',
  submission,
});

export const addTag = tags => ({
  type: 'ADD_TAG',
  tags,
});

export const clearSubmissionData = () => ({
  type: 'CLEAR_SUBMISSION_DATA',
});

export const updateResource = updatedResource => ({
  type: 'UPDATE_RESOURCE',
  updatedResource,
});

export const unapprovedResources = resources => ({
  type: 'UNAPPROVED',
  resources,
});

export const approveResource = resource => ({
  type: 'APPROVE',
  resource,
});

export const editUnapproved = edit => ({
  type: 'EDIT_UNAPPROVED',
  edit,
});

/*--------------------------------
  VOTING
--------------------------------*/

export const updateVote = (resourceId, votes, newVote) => ({
  type: 'UPDATE_VOTE',
  resourceId,
  votes,
  newVote,
});

const snackbarReducer = (state = { login: false, logout: false, admin: false, submit: false, approved: false, unapproved: false, pending: false, notAuth: false, wrong: false }, action) => {
  switch (action.type) {
    case 'LOGIN_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'LOGOUT_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'ADMIN_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'SUBMIT_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'APPROVE_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'UNAPPROVE_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'PENDING_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'NOT_LOGGED_IN_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    case 'WRONG_SNACKBAR_OPEN':
      return Object.assign({}, state, action.snackbar);
    default:
      return state;
  }
};

export default snackbarReducer;

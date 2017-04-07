const dialogReducer = (state = {signUpDialog: false, loginDialog: false}, action) => {
  switch (action.type) {
    case 'SIGNUP_DIALOG_OPEN':
      return Object.assign({}, state, action.dialogs);
    default:
      return state;
  }
}

export default dialogReducer;

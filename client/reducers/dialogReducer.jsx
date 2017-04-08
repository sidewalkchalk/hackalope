const dialogReducer = (state = {signup: false, login: false, submit: false}, action) => {
  switch (action.type) {
    case 'SIGNUP_DIALOG_OPEN':
      return Object.assign({}, state, action.dialogs);
    case 'SUBMIT_DIALOG_OPEN':
      return Object.assign({}, state, action.dialogs);
    default:
      return state;
  }
}

export default dialogReducer;

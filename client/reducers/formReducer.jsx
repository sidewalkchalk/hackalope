const formReducer = (state = {name: '', username: '', password: ''}, action) => {
  switch (action.type) {
    case 'USER_FORM_DATA':
      return Object.assign({}, state, action.userFormData);
    case 'CLEAR_AUTH_FORM':
      return Object.assign({}, undefined);
    default:
      return state;
  }
};

export default formReducer;

function authReducer (state = {}, action) {
  switch (action.type) {
    case 'STORE_USER':
      return (Object.assign({}, state, action.user));
    case 'SIGNUP_FORM_DATA':
      return Object.assign({}, state, action.signUpFormData);
    default:
      return state;
  }
};

export default authReducer;

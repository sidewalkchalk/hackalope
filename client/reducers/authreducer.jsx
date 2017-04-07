function authReducer (state = {}, action) {
  switch (action.type) {
    case 'STORE_USER':
      return (Object.assign({}, state, action.user));
    case 'USER_FORM_DATA':
      return Object.assign({}, state, action.userFormData);
    default:
      return state;
  }
};

export default authReducer;

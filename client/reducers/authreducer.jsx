const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return (Object.assign({}, state, action.user));
    case 'USER_FORM_DATA':
      return Object.assign({}, state, action.userFormData);
    case 'LOGOUT':
      return state = {};
    default:
      return state;
  }
};

export default authReducer;

function authReducer (state = {}, action) {
  switch (action.type) {
    case 'STORE_USER':
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default authReducer;

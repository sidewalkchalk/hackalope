
function authReducer (state = {}, action) {
  switch (action.type) {
    case 'COMMENTS_USER':
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default authReducer;
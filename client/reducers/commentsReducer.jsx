
function commentsReducer (state = {}, action) {
  switch (action.type) {
    case 'COMMENTS_USER':
      return Object.assign({}, state, action.comments);
    default:
      return state;
  }
};

export default commentsReducer;
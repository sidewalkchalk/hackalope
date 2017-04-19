const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return Object.assign({}, state, action.comment);
    case 'DELETE_COMMENT':
      return Object.assign({}, state, action.comment);
    default:
      return state;
  }
};

export default commentReducer;

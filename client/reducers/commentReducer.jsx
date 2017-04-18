const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return Object.assign({}, state, action.comment);
    case 'DELETE_COMMENT':
      return;
    default:
      return state;
  }
};

export default commentReducer;

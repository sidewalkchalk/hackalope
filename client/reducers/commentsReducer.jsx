const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_USER':
      return action.comments;
    case 'COMMENTS_RESOURCE':
      return action.comments;
    default:
      return state;
  }
};

export default commentsReducer;

const submissionReducer = (state = {language: 'JavaScript'}, action) => {
  switch (action.type) {
    case 'USER_SUBMISSION_DATA':
      return Object.assign({}, state, action.submission);
    case 'ADD_TAG':
      return Object.assign({}, state, action.tags);
    case 'CLEAR_SUBMISSION_DATA':
      return state = {language: 'JavaScript', tags: []};
    default:
      return state;
  }
};

export default submissionReducer;

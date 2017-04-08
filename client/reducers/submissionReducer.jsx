const submissionReducer = (state = {language: 'JavaScript'}, action) => {
  switch (action.type) {
    case 'USER_SUBMISSION_DATA':
      return Object.assign({}, state, action.submission);
    case 'CLEAR_SUBMISSION_DATA':
      return state = {};
    default:
      return state;
  }
}
export default submissionReducer;

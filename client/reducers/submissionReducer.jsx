function submissionReducer (state = {}, action) {
  switch (action.type) {
    case 'USER_SUBMISSION_DATA':
      return Object.assign({}, state, action.submission);
    default:
      return state;
  }
}
export default submissionReducer;

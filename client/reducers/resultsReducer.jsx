const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return action.results;
    default:
      return state;
  };
};

export default resultsReducer;

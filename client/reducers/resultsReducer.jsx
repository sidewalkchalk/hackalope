const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_RESULTS':
      return action.results;
    case 'UPDATE_RESOURCE':
      var update = state.resources.map(element => {
        if (element._id !== action.updatedResource._id) {
          return element
        } else {
          return action.updatedResource
        };
      });
      return Object.assign({}, state, {resources: update});
    case 'UPDATE_VOTE':
      //resourceId, votes, newVote = -1 or 1
      var update = state.votes.map(vote => {
        // find the vote that needs to be altered
        if (action.resourceId === vote.resource) {
          // if it's the same as the existing vote
          if (vote.vote === action.newVote.vote) {
            // cancel it out
            vote.vote = 0;

          } else {
            vote.vote = action.newVote.vote;
          }
        }
        return vote;
      });
      return Object.assign({}, state, {votes: update});
    default:
      return state;
  }
};

export default resultsReducer;

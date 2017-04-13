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
      var change = false;
      // create new state with changes
      var updateArray = state.votes.map(vote => {
        if (action.resourceId === vote.resource) {
          change = true;
          if (vote.vote === action.newVote.vote) {
            vote.vote = 0;
          } else {
            vote.vote = action.newVote.vote;
          }
        }
        return vote;
      });

      // if there are no changes, or if the array is empty
      // add the vote to the store
      if (!updateArray.length || !change) {
        update = {
          resource: action.resourceId,
          vote: action.newVote.vote
        };
        updateArray.push(update);
      }
      return Object.assign({}, state, {votes: updateArray});
    default:
      return state;
  }
};

export default resultsReducer;

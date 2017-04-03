var VoteModel = require('../models/vote.js');

// find the status of a user's vote on a particular resource
var getVoteByResource = function (resourceId, userId) {
  return VoteModel.find({resource: resourceId}, {user: userId});
};

var updateVoteByResource = function (resourceId, userId, newVote) {
  return VoteModel.update({_id: resourceId}, {user: userId}, {$set: {
    vote: newVote
  }});
}

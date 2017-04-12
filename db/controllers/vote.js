var VoteModel = require('../models/vote.js');

// creates a new vote for a resource if none exists
exports.newVote = function (vote) {
  return VoteModel.create(vote);
};

// find the status of a user's vote on a particular resource
exports.getVote = function (resourceId, userId) {
  return VoteModel.find({resource: resourceId}, {user: userId});
};

// deletes a user's vote on a resource
exports.deleteVote = function (resourceId, userId) {
  return VoteModel.remove({user: userId}, {resource: resourceId});
};

exports.updateVote = function (resourceId, userId, newVote) {
  return VoteModel.update({_id: resourceId}, {user: userId}, {$set: {
    vote: newVote
  }});
}

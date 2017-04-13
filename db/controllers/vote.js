var VoteModel = require('../models/vote.js');

// creates a new vote for a resource if none exists
exports.newVote = function (vote) {
  return VoteModel.create(vote);
};

// gets all of a user's votes
exports.getVotesByUser = function (userId) {
  return VoteModel.find({user: userId});
};

// deletes a user's vote on a resource
exports.deleteVote = function (resourceId, userId) {
  return VoteModel.remove({user: userId, resource: resourceId});
};

exports.updateVote = function (resourceId, userId, newVote) {
  return VoteModel.findOneAndUpdate({resource: resourceId, user: userId}, {$set: {
    vote: newVote
  }});
};

exports.getUserVotesForResources = function (array, userId) {
  return VoteModel.find({resource: {$in: array}, user: userId})
};

exports.getVote = function (resourceId, userId) {
  return VoteModel.findOne({user: userId, resource: resourceId});
};

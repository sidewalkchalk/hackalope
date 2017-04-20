const VoteModel = require('../models/vote.js');

// creates a new vote for a resource if none exists
exports.newVote = vote => VoteModel.create(vote);

// gets all of a user's votes
exports.getVotesByUser = userId => VoteModel.find({ user: userId });

// deletes a user's vote on a resource
exports.deleteVote = (resourceId, userId) => VoteModel.remove({ user: userId, resource: resourceId });

exports.updateVote = (resourceId, userId, newVote) => VoteModel.findOneAndUpdate({ resource: resourceId, user: userId }, { $set: {
  vote: newVote,
} });

exports.getUserVotesForResources = (array, userId) => VoteModel.find({ resource: { $in: array }, user: userId });

exports.getVote = (resourceId, userId) => VoteModel.findOne({ user: userId, resource: resourceId });

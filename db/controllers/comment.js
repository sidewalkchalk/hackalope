var CommentModel = require('../models/comment.js');

// find all comments by a user's id
exports.findCommentsByUserId = function (id) {
  return CommentModel.find({user: id});
};

// get all comments for a resource by id
exports.findCommentsByResource = function (id) {
  return CommentModel.find({resource: id});
};

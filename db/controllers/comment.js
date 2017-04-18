const CommentModel = require('../models/comment.js');

// insert a new comment
exports.insertComment = function (comment) {
  return CommentModel.create(comment);
};

exports.deleteComment = function (comment) {
  return CommentModel.remove(comment);
};

// find all comments by a user's id
exports.findCommentsByUserId = function (id) {
  return CommentModel.find({ user: id });
};

// get all comments for a resource by id
exports.findCommentsByResource = function (id) {
  return CommentModel.find({ resource: id });
};

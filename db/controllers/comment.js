const CommentModel = require('../models/comment.js');

// insert a new comment
exports.insertComment = comment => CommentModel.create(comment);

// deletes a users comment
exports.deleteComment = commentId => CommentModel.findByIdAndRemove({ _id: commentId }, () => {});

// find all comments by a user's id
exports.findCommentsByUserId = id => CommentModel.find({ user: id });

// get all comments for a resource by id
exports.findCommentsByResource = id => CommentModel.find({ resource: id });

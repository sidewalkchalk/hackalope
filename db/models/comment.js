var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  }
});

var CommentModel = mongoose.model('Comment', commentSchema);

module.exports = CommentModel;

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

module.exports = mongoose.model('Comment', commentSchema);

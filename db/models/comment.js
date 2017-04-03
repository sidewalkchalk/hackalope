var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  },
  date: Date
});

module.exports = mongoose.model('Comment', commentSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);

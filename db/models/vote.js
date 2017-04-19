const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  vote: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource',
  },
});

module.exports = mongoose.model('Vote', voteSchema);

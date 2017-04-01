var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const voteSchema = new Schema({
  vote: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  }
});

module.exports = mongoose.model('Vote', voteSchema);

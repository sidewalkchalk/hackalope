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

var VoteModel = mongoose.model('Vote', voteSchema);

module.exports = VoteModel;

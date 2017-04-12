var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: [String],
  language: String,
  approved: Boolean,
  rating: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Resource', resourceSchema);

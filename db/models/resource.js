const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: [String],
  language: String,
  approved: Boolean,
  rating: Number,
  image: String,
  impression: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Resource', resourceSchema);

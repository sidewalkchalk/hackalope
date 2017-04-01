var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: String,
  description: String,
  url: String,
  tags: Array,
  language: String,
  rating: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

});

module.exports = mongoose.model('Resource', resourceSchema);

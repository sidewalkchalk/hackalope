var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  username: {
    type: 'String',
    unique: true},
  password: String,
  admin: Boolean,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  }]
});

var UsersModel = mongoose.model('Users', usersSchema);

module.exports = UsersModel;

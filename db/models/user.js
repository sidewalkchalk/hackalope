var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  name: String,
  username: {
    type: 'String',
    unique: true},
  password: String,
  admin: Boolean,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  }],
  avatar: String
});

// hash password before saving it to the db
userSchema.pre('save', function (next) {
  var user = this;

  bcrypt.hash(user.password, null, null, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  })
});

// promise-based password compare
userSchema.methods.comparePassword = function (password) {
  var user = this;

  return new Promise (function (fulfill, reject) {
    bcrypt.compare(password, user.password, function (err, res) {
      if (err) {
        return reject (err);
      }
      fulfill(res);
    });
  });
}

module.exports = mongoose.model('User', userSchema);

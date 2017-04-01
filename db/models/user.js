var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

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

// hash password before saving it to the db
usersSchema.pre('save', function (next) {
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
usersSchema.methods.comparePassword = function (password) {
  var user = this;

  return new Promise ((fulfill, reject) => {
    bcrypt.compare(password, hash, function (err, res) {
      if (err) {
        return reject (err);
      }
      fulfill(res);
    });
  });
}

module.exports = mongoose.model('Users', usersSchema);

var UserModel = require('../models/user.js');

// adds a user to the database
exports.insertUser = function (user) {
  return UserModel.create(user);
};

// finds a user by their username
exports.findUserByUsername = function (username) {
  return UserModel.findOne({username: username});
};

// finds a user by their ID
exports.findUserById = function (id) {
  return UserModel.findById(id);
};

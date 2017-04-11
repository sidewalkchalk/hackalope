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
  return UserModel.findOne({_id: id});
};

// add the resource ID of a favorite resource
exports.addFavorite = function (userId, resourceId) {
  return UserModel.findOneAndUpdate({_id: userId}, {$push: {favorites: resourceId}}, {new: true});
}

// removes a favorite from the user's array of favorites
exports.removeFavorite = function (userId, resourceId) {
  return UserModel.findOneAndUpdate({_id: userId}, {$pullAll: {favorites: [resourceId]}}, {new: true});
};

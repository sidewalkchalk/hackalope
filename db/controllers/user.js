const UserModel = require('../models/user.js');

// adds a user to the database
exports.insertUser = user => UserModel.create(user);

// finds a user by their username
exports.findUserByUsername = username => UserModel.findOne({ username });

// finds a user by their ID
exports.findUserById = id => UserModel.findOne({ _id: id });

// add the resource ID of a favorite resource
exports.addFavorite = (userId, resourceId) => UserModel.findOneAndUpdate({ _id: userId }, { $push: { favorites: resourceId } }, { new: true });

// removes a favorite from the user's array of favorites
exports.removeFavorite = (userId, resourceId) => UserModel.findOneAndUpdate({ _id: userId }, { $pullAll: { favorites: [resourceId] } }, { new: true });

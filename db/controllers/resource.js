var ResourceModel = require('../models/resource.js');

// adds a resource to the database
exports.insertResource = function (resource) {
  return ResourceModel.create(resource);
};

// finds all resources for a specified language
exports.findResourcesByLanguage = function (language) {
  return ResourceModel.find({language: language});
};

// finds a resource with a specified id
exports.findResourceById = function (id) {
  return ResourceModel.findOne({_id: id});
};

exports.findFavorites = function (favorites) {
  return ResourceModel.find({_id: {$in: favorites}});
}

// finds all resources with a specified tag
// TODO: make this work for multiple tags
exports.findResourcesByTag = function (language, tag) {
  return ResourceModel.find({language: language}, {tags: tag});
};

// finds all resources submitted by a user
exports.findResourcesByUser = function (userId) {
  return ResourceModel.find({user: userId});
};

exports.findResourceByUrl = function (url) {
  return ResourceModel.find({url: url});
};

// deletes a resource by id
exports.deleteResourceById = function (id) {
  return ResourceModel.remove({_id: id});
};

// deletes a resource by name
exports.deleteResourceByTitle = function (title) {
  return ResourceModel.remove({title: title});
};

// updates a resourceSchema
// TODO: add ability to update tags
exports.updateResourceInfo = function (id, title, description, url) {
  return ResourceModel.find({_id: id}, {$set: {
    title: title,
    description: description,
    url: url
  }});
};

// updates a resource's rating
exports.updateResourceRating = function (id, rating, modifier) {
  var newRating = rating + modifier;
  ResourceModel.update({_id: id}, {$set: {
      rating: newRating
    }
  });
};

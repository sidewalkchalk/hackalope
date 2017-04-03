var ResourceModel = require('../models/resource.js');

// adds a resource to the database
exports.insertResource = function (resource) {
  return ResourceModel.create(resource);
};

// finds all resources for a specified language
exports.findResourcesByLanguage = function (language) {
  return ResourceModel.findAll({language: language});
};

// finds a resource with a specified id
exports.findResourceById = function (id) {
  return ResourceModel.findOne({_id: id});
};

// finds all resources with a specified tag
// TODO: make this work for multiple tags
exports.findResourcesByTag = function (language, tag) {
  return ResourceModel.find({language: language}, {tags: tag});
};

// finds all resources submitted by a user
exports.findResourcesByUser = function (userId) {
  return ResourceModel.findAll({user: userId});
};

// deletes a resource
exports.deleteResource = function (id) {
  return ResourceModel.remove({_id: id});
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

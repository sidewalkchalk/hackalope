const ResourceModel = require('../models/resource.js');

// adds a resource to the database
exports.insertResource = resource => ResourceModel.create(resource);

// finds all resources for a specified language

exports.findResourcesByLanguage = language => ResourceModel.find({ language, approved: true });

// finds a resource with a specified id
exports.findResourceById = id => ResourceModel.findOne({ _id: id, approved: true });

exports.findFavorites = favorites => ResourceModel.find({ _id: { $in: favorites } });

// finds all resources with a specified tag
// TODO: make this work for multiple tags
exports.findResourcesByTag = (language, tag) => ResourceModel.find({ language }, { tags: tag });

// finds all resources submitted by a user
exports.findResourcesByUser = userId => ResourceModel.find({ user: userId, approved: true });

exports.findResourceByUrl = url => ResourceModel.findOne({ url, approved: true });

// deletes a resource by id
exports.deleteResourceById = id => ResourceModel.findByIdAndRemove({ _id: id }, () => {});

// deletes a resource by name
exports.deleteResourceByTitle = title => ResourceModel.remove({ title });

// updates a resource's rating
exports.updateResourceRating = (id, modifier) => ResourceModel.findOneAndUpdate({ _id: id }, { $inc: { rating: modifier } }, { new: true });

// finds all resources still pending approval from an admin
exports.findUnapprovedResources = () => ResourceModel.find({ approved: false });

// updates a resource and marks it approved by an administrator
exports.approveResource = update => ResourceModel.findOneAndUpdate({ _id: update._id }, { $set: {
  title: update.title,
  description: update.description,
  url: update.url,
  language: update.language,
  tags: update.tags,
  approved: true,
},
});

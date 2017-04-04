var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var resourceController = require('../../db/controllers/resource.js');
var userController = require('../../db/controllers/user.js');
var commentController = require('../../db/controllers/comment.js');

// TODO : make this get user's favorited items
router.get('/', utils.checkAuth, function (req, res, next) {
  var profileData = {};
  // get all resources submitted by a user
  resourceController.findResourcesByUser(req.user._id)
    .then ( resources => {
      profileData.resources = resources;
      commentController.findCommentsByUserId(req.user._id)
        .then ( comments => {
          profileData.comments = comments;
          res.json(profileData);
        })
        .catch ( err => {
          console.error(err);
        })
    })
    .catch ( err => {
      console.error(err)
    });
});

module.exports = router;

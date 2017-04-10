var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var commentController = require('../../db/controllers/comment.js');
var userController = require('../../db/controllers/user.js');
var mongoose = require('mongoose');

// get all comments on a resource
router.post('/retrieve', function (req, res) {
  commentController.findCommentsByResource(req.body.result)
    .populate('user')
    .populate('resource')
    .then ( response => {
      console.log(response);
    })
    .catch (err => {
      console.error(err);
    })
});


// add a comment by a user
router.post('/', function (req, res) {
  req.body.user = req.user._id;
  commentController.insertComment(req.body)
    .then ( response => {
      console.log(response);
      res.status(201).send(response);
    })
    .catch (err => {
      console.error(err);
    });
});

module.exports = router;

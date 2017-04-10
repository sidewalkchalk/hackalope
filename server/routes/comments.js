var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var commentController = require('../../db/controllers/comment.js');

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

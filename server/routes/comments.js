const express = require('express');
const router = express.Router();
const utils = require('../utils.js');
const commentController = require('../../db/controllers/comment.js');
const userController = require('../../db/controllers/user.js');
const mongoose = require('mongoose');

// get all comments on a resource
router.get('/:id', (req, res) => {
  commentController.findCommentsByResource(req.params.id)
    .sort('-createdAt')
    .populate('user')
    .then((response) => {
      const commentData = response.map(comment => ({
        username: comment.user.username,
        name: comment.user.name,
        body: comment.body,
        avatar: comment.user.avatar,
        _id: comment._id,
        createdAt: comment.createdAt,
      }));
      res.status(200).send(commentData);
    })
    .catch((err) => {
      console.error(err);
    });
});

// add a comment by a user
router.post('/', (req, res) => {
  req.body.user = req.user._id;
  commentController.insertComment(req.body)
    .then((response) => {
      console.log(response);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.delete('/', function (req, res) {
  commentController.deleteComment(req.body.commentId)
  .then(function (response) {
    console.log(response);
    res.status(201).send(response);
  })
  .catch(function (err) {
    console.error(err);
  })
});


module.exports = router;

var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var resourceController = require('../../db/controllers/resource.js');
var userController = require('../../db/controllers/user.js');
var commentController = require('../../db/controllers/comment.js');

// gets data for user's profile page
// TODO: rewrite all this bullshit
router.get('/', utils.checkAuth, function (req, res, next) {
  var profile = {};
  // get all resources submitted by a user
  resourceController.findResourcesByUser(req.user._id)
    .then ( resources => {
      profile.resources = resources;
      // get all comments submitted by a user
      commentController.findCommentsByUserId(req.user._id)
        .then ( comments => {
          profile.comments = comments;
          // get the user's array of favorites
          userController.findUserById(req.user._id)
            .then ( user => {
              resourceController.findFavorites(user.favorites)
                .then ( favorites => {
                  profile.favorites = favorites;
                  res.json(profile);
                  res.status(201).send(profile);

                })
                .catch (err => {
                  console.error(err);
                })
            })
            .catch ( err => {
              console.error(err);
            })
        })
        .catch ( err => {
          console.error(err);
        })
    })
    .catch ( err => {
      console.error(err)
    });
});

// adds a resource ID to the user's favorites
router.put('/favorites', utils.checkAuth, function (req, res) {
  userController.findUserById(req.user._id)
    .then(user => {
      if (user.favorites.indexOf(req.body.id) < 0) {
        userController.addFavorite(req.user._id, req.body.id)
          .then(response => {
            console.log(response);
            res.status(201).send(response);
          })
          .catch(err => {
            console.error(err);
            res.status(500).send(err)
        });
      } else {
        userController.removeFavorite(req.user._id, req.body.id)
          .then(response => {
            console.log(response);
            res.status(201).send(response);
          })
          .catch(err => {
            console.error(err);
            res.status(500).send(err);
          })
      }
    })

});

// retrieves user data for user authenticated via github
router.get('/user', function (req, res) {
  if (req.user) {
    var userData = {name: req.user.name,
      username: req.user.username,
      password: '',
      admin: req.user.admin,
      _id: req.user._id,
      favorites: req.user.favorites};

   res.status(200).send(userData);
  } else {
    res.send(null);
  }
});

module.exports = router;

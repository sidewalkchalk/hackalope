var express = require('express');
var router = express.Router();
var utils = require('../utils.js')

var resourceController = require('../../db/controllers/resource.js');

// serve user submission?
// TODO: is this necessary? maybe, to handle auth
// or, maybe handle auth client-side
router.get('/', function (req, res) {

});

// handles user's submitted resources
router.post('/', utils.checkAuth, function (req, res) {
  console.log(req.body)
  resourceController.findResourceByUrl(req.body.url)
    .then (function (response) {
      if (response) {
        res.send('This resource has already been posted!')
      } else {
          // set user's ID in request body and add 0 rating for new submission
          req.body.user = req.user._id;
          req.body.rating = 0;
          resourceController.insertResource(req.body)
            .then (function (response) {
              console.log(response);
              res.send(response)
            })
            .catch (function (err) {
              console.log(err);
            })
      }
    })
    .catch (function (err) {
      console.log(err);
    })
})

module.exports = router;

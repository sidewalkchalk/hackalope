var express = require('express');
var router = express.Router();

var resourceController = require('../../db/controllers/resource.js');

// serve user submission?
// TODO: is this necessary? maybe, to handle auth
// or, maybe handle auth client-side
router.get('/', function (req, res) {

});

// handles user's submitted resources
router.post('/', function (req, res) {
  resourceController.findResourceByUrl(req.body.url)
    .then (function (response) {
      if (response) {
        res.send('This resource has already been posted!')
      } else {
          resourceController.insertResource(req.body)
            .then (function (response) {
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

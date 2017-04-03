var express = require('express');
var router = express.Router();
var path = require('path');
var resourceController = require('../../db/controllers/resource.js');

// serve static index.html page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
});

// handle search request from homepage
// TODO: handle search data with tags
router.post('/', function (req, res) {
  resourceController.findResourcesByLanguage(req.body.language)
    .then (function (response) {
      res.send(response);
    })
    .catch (function (err) {
      console.log(err);
    })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');
var resourceController = require('../../db/controllers/resource.js');

// serve static index.html page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
});

// handle search request from homepage
router.post('/', function (req, res) {
  resourceController.findResourcesByLanguage(req.body.language)
    .then ( resources => {
      // if nothing was entered in the search bar, search all resources
      if (req.body.topic === 'General') {
        res.json(resources);
        // otherwise, filter by search term
      } else {
        responseData = resources.filter(resource => {
          return resource.tags.includes(req.body.topic)
        })
        res.json(responseData);
      }
    })
    .catch ( err => {
      console.log(err);
    })
})

module.exports = router;

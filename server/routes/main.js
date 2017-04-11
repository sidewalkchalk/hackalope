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
  console.log(req.body)
  resourceController.findResourcesByLanguage(req.body.language)
    .then ( resources => {
      // if nothing was entered in the search bar, search all resources
      if (!req.body.term) {
        console.log('here i am')
        res.status(201).send(resources);
        // otherwise, filter by search term
      } else {
        responseData = resources.filter(resource => {
          return resource.tags.includes(req.body.term)
        })
        res.status(201).send(responseData);
      }
    })
    .catch ( err => {
      console.log(err);
    });
});

module.exports = router;

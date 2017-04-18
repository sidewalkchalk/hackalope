var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var axios = require('axios');

var resourceController = require('../../db/controllers/resource.js');

// handles user's submitted resources
router.post('/', utils.checkAuth, function (req, res) {
  resourceController.findResourceByUrl(req.body.url)
    .then (function (response) {
      if (response) {
        res.send('This resource has already been posted!')
      } else {
        let config = {
          params: {
            key: '58eff68ba74a41677ff8f43415db89c2157e0f9e042aa',
            q: req.body.url
          }
        }
        axios.get('http://api.linkpreview.net/', config)
          .then( response => {
            var newEntry = {
              user: req.user._id,
              title: response.data.title,
              url: response.data.url,
              description: response.data.description,
              language: req.body.language,
              tags: req.body.tags,
              image: response.data.image,
              impression: req.body.impression,
              user: req.user._id,
              rating: 0,
              approved: false
            };

            resourceController.insertResource(newEntry)
            .then (response => {
              console.log(response);
              res.status(201).send(response)
            })
            .catch (err => {
              console.log(err);
            })
          })
          .catch(err => {
            console.error(err);
          });
      }
    })
    .catch (function (err) {
      console.log(err);
    })
})

module.exports = router;

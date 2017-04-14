var express = require('express');
var router = express.Router();
var resourceController = require('../../db/controllers/resource.js');
var voteController = require('../../db/controllers/vote.js');


// handle search request from homepage
router.get('/', function (req, res) {
  resourceController.findResourcesByLanguage(req.query.language)
    .then ( resources => {
      // if nothing was entered in the search bar, search all resources
      if (!req.query.term) {
        var sendData = {
          resources: resources,
          votes: null
        };
        // if the user is not logged in, send the resources
        if (!req.user) {
          res.status(201).send(sendData);
        } else {
          var ids = resources.map(item => {
            return item._id;
          })
          voteController.getUserVotesForResources(ids, req.user._id)
            .then(votes => {
              sendData.votes = votes;
              res.status(201).send(sendData);
            })
            .catch(err => {
              console.error(err);
              res.status(500).send(err);
            })
        }
        // otherwise, filter by search term
      } else {
        filteredResources = resources.filter(resource => {
          return resource.tags.includes(req.query.term)
        })

        var filteredData = {
          resources: filteredResources,
          votes: null
        }
        if (!req.user) {
          res.status(201).send(filteredData);

        } else {
          var ids = filteredResources.map(item => {
            return item._id;
          })
          voteController.getUserVotesForResources(ids, req.user._id)
            .then(votes => {
              filteredData.votes = votes;
              res.status(201).send(filteredData);
            })
            .catch(err => {
              console.error(err);
              res.status(500).send(err);
            })
        }
      }
    })
    .catch ( err => {
      console.log(err);
    });
});

module.exports = router;

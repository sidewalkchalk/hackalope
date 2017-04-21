const express = require('express');
const router = express.Router();
const resourceController = require('../../db/controllers/resource.js');
const voteController = require('../../db/controllers/vote.js');


// handle search request from homepage
router.get('/', (req, res) => {
  resourceController.findResourcesByLanguage(req.query.language)
    .sort('-rating')
    .then((resources) => {
      // if nothing was entered in the search bar, search all resources
      if (!req.query.term) {
        const sendData = {
          resources,
          votes: null,
        };
        // if the user is not logged in, send the resources
        if (!req.user) {
          res.status(201).send(sendData);
        } else {
          var ids = resources.map(item => item._id);
          voteController.getUserVotesForResources(ids, req.user._id)
            .then((votes) => {
              sendData.votes = votes;
              res.status(201).send(sendData);
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send(err);
            });
        }
        // otherwise, filter by search term
      } else {
        filteredResources = resources.filter(resource => resource.tags.indexOf(req.query.term) > -1);

        const filteredData = {
          resources: filteredResources,
          votes: null,
        };
        if (!req.user) {
          res.status(201).send(filteredData);
        } else {
          var ids = filteredResources.map(item => item._id);
          voteController.getUserVotesForResources(ids, req.user._id)
            .then((votes) => {
              filteredData.votes = votes;
              res.status(201).send(filteredData);
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send(err);
            });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

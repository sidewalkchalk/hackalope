var express = require('express');
var router = express.Router();
var path = require('path');
var voteController = require('../../db/controllers/vote.js');
var resourceController = require('../../db/controllers/resource.js');

router.post('/:id', function (req, res) {
  // check to see if the user has already voted on the resource
  voteController.getVote(req.params.id, req.user._id)
    .then (found => {
      // if they haven't, let them vote and change total votes on resource
      if (!found.length) {
        vote = {
          resource: req.params.id,
          user: req.user._id,
          vote: req.body.vote
        }
        voteController.newVote(vote)
          .then (response => {
            resourceController.updateResourceRating(req.params.id, req.body.vote)
              .then(response => {
                console.log(response)
                res.status(201).send(response);
              })
              .catch(err => {
                console.error(err);
                res.status(500).send(err);
              })
          })
          .catch (err => {
            console.error(err);
            res.status(500).send(err)
          })
        // if they have, check if they're trying to cast the same vote again
      } else {
        if (found.vote === req.body.vote) {
          // if they are, remove their vote from the database and change vote total
          voteController.deleteVote(req.params.id, req.user._id)
            .then(response => {
              if (found.vote === 1) {
                resourceController.updateResourceRating(req.params.id, -1)
                  .then(response => {
                    console.log(response);
                    res.status(201).send(response);
                  })
                  .catch(error => {
                    console.error(err);
                    res.status(500).send(err);
                  })
              } else {
                resourceController.updateResourceRating(req.params.id, 1)
                  .then(response => {
                    console.log(response)
                    res.status(201).send(response);
                  })
                  .catch(err => {
                    console.error(err)
                    res.status(500).send(response);
                  })
              }
            })
            .catch(err => {
              console.error(err);
              res.status(500).send(response);
            })
        } else {
          // if they're voting differently, change their vote and change vote total
          voteController.updateVote(req.params.id, req.user._id, req.body.vote)
            .then (response => {
              resourceController.updateResourceRating(req.params.id, req.body.vote)
                .then(response => {
                  console.log(response);
                  res.status(201).send(response);
                })
                .catch(err => {
                  console.error(err);
                  res.status(500).send(err);
                })
            })
            .catch (err => {
              console.error(err);
              res.status(500).send(err)
            })
        }
      }
    })
    .catch (err => {
      console.error(err);
      res.status(500).send(err)
    })
});

module.exports = router;

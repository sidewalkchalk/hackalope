const express = require('express');
const router = express.Router();
const utils = require('../utils.js');
const axios = require('axios');

const resourceController = require('../../db/controllers/resource.js');

// handles user's submitted resources
router.post('/', utils.checkAuth, (req, res) => {
  resourceController.findResourceByUrl(req.body.url)
    .then((response) => {
      if (response) {
        res.send('This resource has already been posted!');
      } else {
        const config = {
          params: {
            key: '58eff68ba74a41677ff8f43415db89c2157e0f9e042aa',
            q: req.body.url,
          },
        };
        axios.get('http://api.linkpreview.net/', config)
          .then((response) => {
            const newEntry = {
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
              approved: false,
            };

            resourceController.insertResource(newEntry)
            .then((response) => {
              console.log(response);
              res.status(201).send(response);
            })
            .catch((err) => {
              console.log(err);
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

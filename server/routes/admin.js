var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var resourceController = require('../../db/controllers/resource.js');


router.get('/', function (req, res) {
  resourceController.findUnapprovedResources()
    .then(function (response) {
      res.status(201).send(response);
    })
    .catch (function (err) {
      console.error(err);
    })
});

router.put('/', function (req, res) {
  resourceController.approveResource(req.)
});

module.exports = router;
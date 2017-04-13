var express = require('express');
var router = express.Router();
var utils = require('../utils.js');
var resourceController = require('../../db/controllers/resource.js');

//returns unapproved resources
router.get('/', function (req, res) {
  resourceController.findUnapprovedResources()
    .populate('user')
    .then(function (response) {
      console.log(response);
      res.status(201).send(response);
    })
    .catch (function (err) {
      console.error(err);
    })
});
  
//approves a resource
router.put('/', function (req, res) {
  console.log(req.body);
  resourceController.approveResource(req.body.resultId)
    .then(function (response) {
      console.log(response);
      res.status(201).send(response);
    })
    .catch(function (err) {
      console.error(err);
    })
});

//delete a resource that was not approved
router.delete('/', function (req, res) {
  resourceController.deleteResourceById(req.body.resultId)
  .then(function (response) {
    console.log(response);
    res.status(201).send(response);
  })
  .catch(function (err) {
    console.error(err);
  })
});

module.exports = router;
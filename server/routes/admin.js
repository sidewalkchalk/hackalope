const express = require('express');
const router = express.Router();
const utils = require('../utils.js');
const resourceController = require('../../db/controllers/resource.js');

// returns unapproved resources
router.get('/', (req, res) => {
  resourceController.findUnapprovedResources()
    .populate('user')
    .then((response) => {
      console.log(response);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

// approves a resource
router.put('/', (req, res) => {
  console.log(req.body);
  resourceController.approveResource(req.body.resultId)
    .then((response) => {
    //  console.log(response);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

// delete a resource that was not approved
router.delete('/', (req, res) => {
  resourceController.deleteResourceById(req.body.resultId)
  .then((response) => {
    console.log(response);
    res.status(201).send(response);
  })
  .catch((err) => {
    console.error(err);
  });
});

module.exports = router;

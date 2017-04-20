const express = require('express');
const router = express.Router();
const resourceController = require('../../db/controllers/resource.js');

// returns unapproved resources
router.get('/', (req, res) => {
  resourceController.findUnapprovedResources()
    .populate('user', ['name', 'username', 'avatar'])
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      console.error(err);
    });
});

// approves a resource
router.put('/', (req, res) => {
  resourceController.approveResource(req.body)
    .then((response) => {
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

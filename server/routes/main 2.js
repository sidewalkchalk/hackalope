const express = require('express');
const router = express.Router();
const path = require('path');

// serve static index.html page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;

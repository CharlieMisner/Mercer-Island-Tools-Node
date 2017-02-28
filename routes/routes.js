var express = require('express');
var actions = require('../methods/actions');

var router = express.Router();

router.post('/sendmail', actions.sendEmail);

router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
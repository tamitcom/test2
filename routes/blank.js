var express = require('express');
var router = express.Router();

/* GET blank page. */
router.get('/', function(req, res, next) {
  res.render('blank', { title: 'Blank' });
});

module.exports = router;

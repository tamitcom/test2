var express = require('express');
var router = express.Router();

/* GET logout page. */
router.get('/', function(req, res, next) {
  res.render('logout', { title: 'logout' });
});

module.exports = router;

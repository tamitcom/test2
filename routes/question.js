var express = require('express');
var router = express.Router();

/* GET question page. */
router.get('/', function(req, res, next) {
  res.render('question', { title: 'ถาม-ตอบข้อสงสัย' });
});

module.exports = router;

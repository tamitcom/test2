var express = require('express');
var router = express.Router();

/* GET order-process page. */
router.get('/', function(req, res, next) {
  res.render('order-process', { title: 'ขั้นตอนการสั่งซื้อ' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET consignment page. */
router.get('/', function(req, res, next) {
  res.render('consignment', { title: 'ฝากขายสินค้า' });
});

module.exports = router;

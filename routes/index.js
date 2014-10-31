var express = require('express');
var router = express.Router();
var goods = require('../controller/goods');
/* GET home page. */
/*router.get('/', function(req, res) {

  res.render('shopList', { title: 'Express' });
  //res.render('index', { title: 'Express' });
});*/
router.get('/', goods.getGoodsList);
module.exports = router;

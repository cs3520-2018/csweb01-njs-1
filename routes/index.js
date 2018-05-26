var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/project/storeData', require('./project/storeData') );
console.log('Debug');
router.use('/project/getAllOrders', require('./project/getAllOrders') ); 
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
//next makes the function below a middleware function 
//can be used to add multiple route handlers to the '/' route path
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

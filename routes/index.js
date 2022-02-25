var express = require('express');
var router = express.Router();

/* GET home page. */
//next makes the function below a middleware function 
//can be used to add multiple route handlers to the '/' route path
router.get('/', (req, res)=> {
  res.redirect('/catalog');
});


module.exports = router;

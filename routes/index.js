var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PetPals Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'PetPals About'});
});

module.exports = router;

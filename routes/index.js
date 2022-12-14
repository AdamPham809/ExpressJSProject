var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About',
  });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products',
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services',
  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contatct us',
  });
});

module.exports = router;
/*
MVC --> Model View Controller
model --> to connect our 
view --> pages
controller --> the logic behind our routes 
*/
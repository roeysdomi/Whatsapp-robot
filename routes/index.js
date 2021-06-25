var express = require('express');
var router = express.Router();
var montest = require('../routes/mongotest');
var chrome=require('../routes/pup');

/* GET home page. */
router.get('/', function(req, res, next) {
  chrome.pup();
  res.render('test', { title: 'Express' });

});

module.exports = router;

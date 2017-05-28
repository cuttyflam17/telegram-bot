var express = require('express');
var bot = require('../telegram-bot');
var router = express.Router();

module.exports = function(app) {
	var db = app.get('db');
	var config = app.get('config');
  router.post('/', function(req, res) {
  	console.log(req.body);
  	bot.processUpdate(req.body);
  	res.end();
  })

  app.use('/telegram', router);
};
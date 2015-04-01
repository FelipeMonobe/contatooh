// server.js

var config = require('./config/config')();

var http = require('http');
var express = require('express');
var app = require('./config/express')(app);	
require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address, function () {
	console.log('\nExpress Server escutando em '
	+ config.address
	+ ':' + config.port);
});
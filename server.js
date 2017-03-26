process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var config = require('./config/config');   

var app = express();

app.listen(config.port);

module.exports = app;
console.log('Server running at http://localhost:' + config.port);
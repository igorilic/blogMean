process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();

var app = express();
app.listen(6000);
module.exports = app;

console.log('Server is up and running at port 3000');

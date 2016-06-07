//server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

//Routes
require('./app/routes')(app);

//Start
app.listen(port);

console.log('Server accessible on ' + port);

exports = module.exports = app;
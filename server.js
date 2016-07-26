


// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// MongoDB
mongoose.connect('mongodb://admin:admin@ds029725.mlab.com:29725/supportplan');

// Express

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return next();
});



// Routes
app.use('/api',require('./routes/api'));

// start server
app.listen(3000);
console.log('API is running on 3000');

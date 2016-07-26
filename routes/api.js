// Dependencies
var express = require('express');
var router = express.Router();

// Models
var supportPlan = require('../models/supportPlan');


// Routes
supportPlan.methods(['get','put','post','delete']);
supportPlan.register(router, '/supportPlans');


// Return router

module.exports = router;
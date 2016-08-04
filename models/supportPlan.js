// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var supportPlanSchema = new mongoose.Schema({
    userId: Number,
    outcomes: [{
        numb: Number,
        outcomeDate: String,
        outcomeHeading: Number,
        baselineCUI: Number,
        preferredOutcome: String,
        actions: [{
            actionDate: String,
            actionTitle: String,
            isComplete: Boolean
        }],
        outcomeReview: [{
            cuiScore: Number,
            reason: Number,
            details: String
        }],
        fileEntryes: [{
            entryDate: String,
            details: String
        }]
    }]
});

// Return model

module.exports = restful.model('SupportPlans', supportPlanSchema);

var mongoose = require('mongoose');

var cinemaSchema = new mongoose.Schema({
    cinemaName: {type: String, default: null},
    cinemaArea: {
        type: String, 
        enum: ['Bangkok', 'Central', 'North', 'West', 'NorthEast', 'South', 'East'],
        default: 'Bangkok'
        }

});


module.exports = mongoose.model('Cinema', cinemaSchema);
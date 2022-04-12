  
var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
    date : String,
    time: String,
    theater: Number,
    seats: {
        type: [String],
        default: [ 'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4' ],
    },
     
    cinema: String,
    movies: String,

    reservation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reserve'
        },
    ],
});

module.exports = mongoose.model('session', sessionSchema);
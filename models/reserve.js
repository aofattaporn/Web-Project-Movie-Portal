var mongoose = require('mongoose');

var reserveSchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String,
    },

    date : String,
    time: String,
    theater: Number,
    cinemaName: String,
    cinemaImage: String,
    moviesName: String,
    moviesImage: String,
    boughtTime: {
        type: Date,
        default: Date.now
    },

    seats: [String],

});

module.exports = mongoose.model('reserve', reserveSchema);
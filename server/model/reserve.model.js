var mongoose = require('mongoose');

var reserveSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  
    },
    user_name: String,
    date : { type: Date, default: Date.now}, 
    theater: Number,
    cinemaName: String,
    moviesName: String,
    moviesImage: String,
    boughtTime: {
        type: Date,
        default: Date.now
    },
    seats: [String],
    totalPrice: Number

});

module.exports = mongoose.model('reserve', reserveSchema);
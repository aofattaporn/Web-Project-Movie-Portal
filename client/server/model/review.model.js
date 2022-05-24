var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String,
    },
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Review', reviewSchema);
var mongoose = require('mongoose');

var likeSchema = new mongoose.Schema({
    movies: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'movies'
        },
        name: String,
        image: String,
        release: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Liked', likeSchema);
var mongoose = require('mongoose');

var likedSchema = new mongoose.Schema({
    movies: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'movies'
        },
        name: String,
        image: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Liked', likedSchema);
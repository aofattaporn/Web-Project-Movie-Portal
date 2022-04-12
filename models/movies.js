var mongoose = require('mongoose');

var moviesSchema = new mongoose.Schema({
    name: String,

    //  Media
    image: String,
    logo: String,
    trailer: String,

    //  Desc
    genre: String,
    director: String,
    runtime: String,
    score: Number,
    show: String,
    desc: String,

    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('movies', moviesSchema);
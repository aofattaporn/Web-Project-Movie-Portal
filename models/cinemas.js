var mongoose = require('mongoose');

var cinemasSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    image2: String,
    image3: String,
    image4: String,
});

module.exports = mongoose.model('cinemas', cinemasSchema);
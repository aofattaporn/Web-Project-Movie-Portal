var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
   name: String,

   //  Media
   image: String,
   trailer: String,

   //  Desc
   genre: String,
   director: String,
   runtime: String,
   score: Number,
   desc: String,
   released: Date,

});


module.exports = mongoose.model('Cinema', movieSchema);
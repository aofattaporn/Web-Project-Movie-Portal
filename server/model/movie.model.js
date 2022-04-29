var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
   name:{ type: String, default: null},

   //  Media
   image: { type: String, default: "../../assets/images/movies/venom/post-venom.png"},
   trailer: { type: String, default: null},

   //  Desc
   genre:  { type: String, default: null},
   director: { type: String, default: null},
   runtime: { type: String, default: null},
   desc: { type: String, default: null},
   released: { type: Date, default: Date.now},

});


module.exports = mongoose.model('Movie', movieSchema);
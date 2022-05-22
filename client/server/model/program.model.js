  
var mongoose = require('mongoose');

var programSchema = new mongoose.Schema({
    date : { type: Date, default: Date.now}, 
    time:  {type: Date, default: Date.now},
    theater: Number,
    seats: [     
      {
         type: { type: String },
         price: { type: Number, default: 120 },
         available: {type: Boolean}
         
      }   
   ],
     
    cinema: {type: mongoose.Schema.Types.ObjectId, ref: 'cinemas' },
    movies: {type: mongoose.Schema.Types.ObjectId, ref: 'movies' },
});

module.exports = mongoose.model('program', programSchema);
  
var mongoose = require('mongoose');

var programSchema = new mongoose.Schema({
    date : new Date(),
    theater: Number,
    seats: [
      {
         type: { type: String },
         price: { type: Number, default: 120 }, 
         status: {tpye: Boolean, default: false}
      }   
   ],
     
    cinema: {type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
    movies: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
});

module.exports = mongoose.model('program', programSchema);
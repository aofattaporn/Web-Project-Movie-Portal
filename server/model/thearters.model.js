var mongoose = require('mongoose');

var theaterSchema = new mongoose.Schema({
    theater_number: {type: String, default: null},
    cinemaArea: {type: String, default: null},
    seats: [
       {
          type: { type: String, enum: [ 'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4' ] },
          price: { type: Number, default: 120 }, 
          status: {tpye: Boolean, default: false}
       }   
    ]
});


module.exports = mongoose.model('Theater', theaterSchema);
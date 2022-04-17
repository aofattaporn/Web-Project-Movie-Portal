var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    uuid: String,
    username: String,
    profileImage: {type: String},
});


module.exports = mongoose.model('User', userSchema);
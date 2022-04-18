var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String, default: null},
    isAdmin: {type: Boolean, default: false},
    token: {type: String}

});


module.exports = mongoose.model('User', userSchema);
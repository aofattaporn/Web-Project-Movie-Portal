var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    imageProfile: {type: String, default: null},
    phone: {type: String, default: null},
    isAdmin: {type: Boolean, default: false},
    token: {type: String}
});


module.exports = mongoose.model('User', userSchema);
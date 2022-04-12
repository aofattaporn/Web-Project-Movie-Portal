var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profileImage: {type: String, default: '/images/user/default1.png'},
    isAdmin: {type: Boolean, default: false},
    likes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Liked',
            autopopulate: true
        }
    ],
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('User', userSchema);
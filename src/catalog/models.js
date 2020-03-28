const mongoose = require('../db');
const { Schema } = require('mongoose');
const uuidv1 = require('uuid/v1');

const ProfileScheme = new Schema(
    {
        id: String,
        name: String,
        facebook_link: String,
        specialty: String,
        about: String,
    }
);
ProfileScheme.pre('save', function (next) {
    if (!this.id) {
        this.id = uuidv1();
    }
    next();
});
const Profile = mongoose.model('Profile', ProfileScheme);

module.exports = { Profile };

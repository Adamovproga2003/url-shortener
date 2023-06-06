const mongoose = require('mongoose');
const crypto = require("crypto");
const URLSchema = require('./URL');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        maxLenght: 20
    },
    email: {
        type: String,
        maxLenght: 32,
        unique: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    loginDate: Date,
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String
    }
});

// virtual
UserSchema.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);

    })
    .get(function () {
        return this._password;
    })

// methods
UserSchema.methods = {
    encryptPassword: function (password) {
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    },
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + '';
    },
    authenticate: function (password) {
        return this.encryptPassword(password) === this.hashedPassword;
    }
}

module.exports = mongoose.model('User', UserSchema);
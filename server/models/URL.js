const mongoose = require('mongoose');
const crypto = require("crypto");
const { Schema } = mongoose;

const URLSchema = new Schema({
    hash: {
        type: String,
        maxLenght: 120,
        unique: true
    },
    originalURL: {
        type: String,
        maxLenght: 512
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    expirationDate: Date,
    visits: {
        type: Number,
        default: 0
    },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('URL', URLSchema);
const mongoose = require('mongoose');

// create a user Scheme for creating a user
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// create a model "user"
const user = mongoose.model("user", userScheme);
module.exports = {
    user
}
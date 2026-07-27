const mongoose = require('mongoose');
const userMiddleware = require('./../middleware/user.middleware')

// create a user Scheme for creating a user
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

userScheme.pre('save', userMiddleware.hashPassword);

// create a model "user"
const userModel = mongoose.model("user", userScheme);
module.exports = {
    userModel
}
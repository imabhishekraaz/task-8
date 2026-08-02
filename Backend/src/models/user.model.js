const mongoose = require('mongoose');
const userMiddleware = require('./../middleware/user.middleware');
const validator = require('validator');


const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Name length must have greater than 2'],
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password length must have greater than 6'],
        maxLength: [20, 'Password length must have less than 20']

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

/**
 * Create  user schema for the user register
 * @requires { Name , Password , Email}
 * @param {string} Name User name
 * @param {string} Password user password
 * @param {string} Email user Email address
 */
const userModel = mongoose.model("user", userScheme);
module.exports = {
    userModel
}
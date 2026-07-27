const express = require('express');
const userController = require('./../controller/user.controller')


const userRouter = express.Router();

userRouter.post('/user/signup', userController.signupUser)
userRouter.post('/user/login', userController.loginUser)

module.exports = {
    userRouter
}
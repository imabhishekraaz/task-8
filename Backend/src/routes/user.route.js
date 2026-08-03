const express = require('express');
const userController = require('./../controller/user.controller')
const token = require('./../middleware/auth.middleware')


const userRouter = express.Router();

userRouter.post('/user/signup', userController.signupUser)
userRouter.post('/user/login', userController.loginUser)

// verify user JWT token
userRouter.get('/user/verify', token.verifyToken, (req,res)=> {
    res.status(200).json({
        success: true,
        message: 'user token verify'
    })
})

module.exports = {
    userRouter
}
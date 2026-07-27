const jwt = require('jsonwebtoken');
const { userModel } = require('../models/user.model');

exports.verifyToken = async (req, res, next)=> {
    
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.'
            })
        };

        const token = authHeader.split(' ')[1];

        const decode = jwt.verify(token, process.env.JWT_STR)
        const userFound = await userModel.findById(decode.id).select('-password');
        
        if(!userFound) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            })
        }

        req.user = decode;

        next();
    } catch(err) {
        return res.status(401).json({
            success:false,
            message:err.message
        })
    }
}
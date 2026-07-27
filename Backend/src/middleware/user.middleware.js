const bcrypt = require('bcrypt');
const userModel = require('./../models/user.model')

exports.hashPassword = async function () {

    if (!this.isModified('password')) return;

    try {
        // hashing the password
        this.password = await bcrypt.hash(this.password, 12);

        // catch the error
    } catch (err) {
        throw new Error(err.message)
    }
};

exports.comparePassword = async (req, res, next) => {

    // 1. fetch user details
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({
            success:false,
            message:'All fields required'
        })
    }
    try {
        // fetch user password
        const foundUser = await userModel.findOne({ email })

        // Check user existence
        if (!foundUser) {
            return res.status(400).json({
                success:false,
                message:'User not Found'
            })
        }
        
        // compare password
        const compareUserPassword = await bcrypt.compare(req.body.password, foundUser.password)

        next();
    } catch(err) {
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
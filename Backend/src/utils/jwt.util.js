const jwt = require('jsonwebtoken');


/**
 * Generated a signed JWT token string
 * @param {object} user - The Mongoose user
 * @return {string} Signed JWT Token   
 */
exports.generateToken = async (user) => {
    // create the user payload 
    const userPayload = {
        id: user._id,
        email: user.email
    };

    // signed a user
    const token = await jwt.sign(userPayload, process.env.JWT_STR, {
        expiresIn: process.env.EXP_DATE || 3000000
    })

    return token;
};


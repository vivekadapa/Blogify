const jwt = require('jsonwebtoken')


exports.generateAccessToken = (user) => {
    return jwt.sign({
        _id: user._id
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


exports.generateRefreshToken = (user) => {
    return jwt.sign({
        _id: user._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const customError = require('./customError')

const auth = async (req, res, next) =>{

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new customError('Invalid authentication', StatusCodes.UNAUTHORIZED)
    }

    const token = authHeader.split(' ')[1]

    try{
        const payload = jwt.verify(token,process.env.SECRET_KEY)

        req.user = {userId: payload.userId}
        next()
    }catch(err){
        throw new customError('Invalid authentication', StatusCodes.UNAUTHORIZED)
    }

}

module.exports = auth
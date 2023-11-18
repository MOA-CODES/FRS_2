const User = require('../models/user_M')
const customError = require('../middlewares/customError')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res)=>{
    const user = await User.create({...req.body})

    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{msg:`Created User:${user.Fname} ${user.Lname}`, userId:user._id,token}})
}

module.exports = {register}
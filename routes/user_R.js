const express = require('express')
const router = express.Router()

const {register,} = require('../controllers/user_C')

router.post('/register', register)

module.exports = router
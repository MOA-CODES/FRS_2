require('dotenv').config()
require('express-async-errors')

const express = require('express')
const morgan = require('morgan')
const conn = require('./db/conn')

const notFound = require('./middlewares/not-found')
const auth = require('./middlewares/authentication')

const user_R = require('./routes/user_R')

const app = express()

const port = process.env.PORT || 3031

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Friend Request System App 2')
})

app.use('/api/v1/user', user_R)

app.use(notFound)

conn()

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})


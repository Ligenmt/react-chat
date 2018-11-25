const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const UserRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', UserRouter)

// app.get('/', (req, res) => {
//     return res.json({code: 0})
// })

app.listen(9000, function () {
    console.log('Node app start at 9000')
})

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const UserRouter = require('./user')

const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function (socket) {
    // console.log('user login')
    socket.on('sendmsg', function (data) {
        console.log(data)
        const {from, to, text} = data
        const chatid = [from, to].sort().join('_')
        Chat.create({chatid, from, to, content: text}, function (err, doc) {
            console.log(doc)
            io.emit('recvmsg', doc)
        })
    })

})

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', UserRouter)

// app.get('/', (req, res) => {
//     return res.json({code: 0})
// })

server.listen(9000, function () {
    console.log('Node app start at 9000')
})

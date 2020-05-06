const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')


const app = express()

//well here we use this http stuff to use our app and server on same local host
const server = http.createServer(app)

const io = socketio(server)

let usersockets = {}

//on opening server index.html file will execute in public folder 
app.use('/', express.static(path.join(__dirname, 'public')))

//this code will copy itself for each user 
io.on('connection', (socket) => {
    console.log("new socket formed at " + socket.id)

    socket.emit('connected')

    socket.on('username', (data) => {
        usersockets[data.user] = socket.id
        console.log(usersockets)
    })

    //this is listner on server(what client say to server)
    socket.on('send_msg', (data) => {
        // console.log("recived msg  = " + data.msg)
        if (data.msg.startsWith('@')) {
            let recipient = data.msg.split(':')[0].substr(1)
            let recsocket = usersockets[recipient]
            io.to(recsocket).emit('recv_msg', data)
            //name of event must be same ^

        } else {
            //io.emit sends data back to everyone including sender
            //socket.broadcast.emit send data to others not to the sender 
            socket.broadcast.emit('recv_msg', data)

            //this will send data back to all the client
            // io.emit('recv_msg', data)
        }

    })
})

server.listen(1234, () => console.log('server open at http://localhost:1234'))
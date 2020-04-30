const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')


const app = express()
const server = http.createServer(app)   //well here we use this http stuff to use our app and server on same local host
const io = socketio(server)


//on opening server index.html file will execute in public folder 
app.use('/', express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
    console.log("new socket formed at " + socket.id)
    socket.emit('connected')
    socket.on('send_msg' , (data)=>{
        io.emit('recv_msg ',data)       // send backs data to the client
    })
})

server.listen(1234, () => console.log('server open at http://localhost:1234'))
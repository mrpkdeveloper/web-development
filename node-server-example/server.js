const express = require('express')
const server = express()
server.get('/',function(req,res,next){
    console.log("yo")
    res.send("hello world")
})

server.listen(2121)





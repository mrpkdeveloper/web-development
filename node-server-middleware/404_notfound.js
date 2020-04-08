const express = require('express')
const server = express()
//middlewares
server.get('/a',function(req,res,next){
    res.send("AAAA")
})
server.get('/b',function(req,res,next){
    res.send("BBBB")
})
//anything another than /a or /b will get 404 page not found
//we use use here not get because use can handle all the request 
server.use(function(req,res,next){
    res.send("<h2>404 page not found<\h2>")
})

server.listen(1234)
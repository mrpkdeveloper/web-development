const express = require('express')
const server = express()
server.get('/',function(req,res,next){
    console.log("yo")
    res.send("hello world")
})

server.get('/greet/:tod/:name',function(req,res,next){
    let tod="morning"
    switch(req.params.tod){
     case 'evening' : tod="evening ";break;
     case 'morning' : tod="morning ";break;

    }

    res.send("Good "+tod + req.params.name)
})
server.listen(2121)





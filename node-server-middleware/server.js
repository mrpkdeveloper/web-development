const express = require('express')
const server = express()

let m1=function(req,res,next){
    console.log("we are in m1")
    next()
}
let m2=function(req,res,next){
    console.log("we are in m2")
    next()
}
let m3=function(res,req,next){
    console.log("we are in m3")
    next()
}

server.use(m1)

server.get('/',function(req,res,next){
    res.send("hello world")
})
server.get('/a',function(req,res,next){
    res.send("hello world a")
})
server.use(m2)
server.use(m3)

server.listen(3232)
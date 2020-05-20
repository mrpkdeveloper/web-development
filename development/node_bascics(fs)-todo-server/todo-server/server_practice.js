const express = require('express')
const app = express()

let pageview = 0


app.get('/', (req, res) => {
    // res.send("<h1>hello world</h1>")  //we can also pass html in res.send 
    //we have to send proper file path 
    res.sendFile(__dirname + '/helloworld.html')
    // console.log(req.url)

    pageview++
})

app.get('/views', (req, res) => {
    res.send("number of views " + pageview)
})

app.listen(3333)
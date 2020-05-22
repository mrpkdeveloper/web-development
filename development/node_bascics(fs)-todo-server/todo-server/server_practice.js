const express = require('express')
const app = express()
const path = require('path')

let pageview = 0


app.get('/', (req, res) => {
    // res.send("<h1>hello world</h1>")  //we can also pass html in res.send 
    //we have to send proper file path 
    // res.sendFile(__dirname + '/helloworld.html')
    // res.sendFile('../public/holi.html', { root: __dirname })
    res.sendFile('holi.html', { root: path.join(__dirname, '../public') });
    // console.log(req.url)

    pageview++
})

app.get('/views', (req, res) => {
    res.send("number of views " + pageview)
})

app.listen(3333)
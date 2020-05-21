const express = require('express')
const app = express()
const path = require('path')


app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendfile(__dirname + '/index.html')

// })

app.get('/add', (req, res) => {
    console.log(req.query)
    res.redirect('/')
})

app.listen(4444)
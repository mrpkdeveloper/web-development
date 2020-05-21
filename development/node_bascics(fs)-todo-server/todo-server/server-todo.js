const express = require('express')
const app = express()
const path = require('path')


app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendfile(__dirname + '/index.html')

// })            // yeh vali request upper vali ek line se ho gayi

app.listen(4444)
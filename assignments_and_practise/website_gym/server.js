const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//the above lines are for handling post requests to the server

//this line to set path variable 
//now can use public folder as static folder
app.use('/', express.static(path.join(__dirname, '/public')))

//this line will executes index.js inside routes/api
app.use('/api', require('./routes/api').route)

//this line will start server at 1111 localhost
app.listen(1456, () => { console.log('http://localhost:1456') })

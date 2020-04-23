const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())                              
app.use(express.urlencoded({extended:true}))    
//the above lines are for handling post requests to the server


app.use('/', express.static(path.join(__dirname, 'public')))  //this file executes index.html in public folder
app.use('/api', require('./routes/api').route)  //this line execute index.js in api folder
app.listen(1111, () => { console.log('server started at http://localhost:1111') })

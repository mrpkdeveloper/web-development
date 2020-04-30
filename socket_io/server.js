const express = require('express')
const app = express()
const path = require('path')


//on opening server index.html file will execute in public folder 
app.use('/',express.static(path.join(__dirname,'public')))

app.listen(1234, () => {
    console.log('server open at http://localhost:1234')
})
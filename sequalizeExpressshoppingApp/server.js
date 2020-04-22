const express = require('express')
const app = express()
const path = require('path')

app.use('/',express.static(path.join(__dirname,'public')))
app.listen(1111,()=>{console.log('server started at http://localhost:1111')})

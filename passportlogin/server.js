const express = require('express')
const app = express()


app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.listen(1234,function(){console.log("server at http://localhost:1234")})

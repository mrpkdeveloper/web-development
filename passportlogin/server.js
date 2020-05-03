const express = require('express')
const app = express()

//to handle post request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/route'))
app.listen(1234, function () { console.log("server at http://localhost:1234") })

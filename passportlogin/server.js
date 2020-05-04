const express = require('express')
const session = require('express-session')  // npm i express-session to handle sessions during login
const passport = require('./passport')
const app = express()

//to handle post request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    //this secret is used to encode cokkies
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')
app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/route'))
app.listen(1234, function () { console.log("server at http://localhost:1234") })

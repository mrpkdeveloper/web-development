const express = require('express')
const app = express()
const path = require('path')
const fareutil = require('./fareutils')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//public static will be on root path now 
app.use('/', express.static(path.join(__dirname, 'public_static')))
app.post('/calculator', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseFloat(req.body.min)

    //calute fare 
    let fare = fareutil.calcfare(km, min)

    //send in form of json object
    res.send({ fare: fare })
})


//to show rate chart
app.get('/rate', (req, res) => {
    res.send(fareutil.rate)
})

exports = module.exports = app

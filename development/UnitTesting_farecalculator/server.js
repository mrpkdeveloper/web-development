const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//public static will be on root path now 
app.use('/', express.static(path.join(__dirname, 'public_static')))
app.post('/calculator', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseFloat(req.body.min)
    let fare = 50
    fare += (km > 5) ? ((km - 5) * 10) : 0
    fare += (min > 15) ? ((min - 15) * 2) : 0

    //send in form of json object
    res.send({ fare: fare })
})

app.listen(1111, () => { console.log("server open at http://localhost:1111") })
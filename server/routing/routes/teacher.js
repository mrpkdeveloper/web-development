const express = require('express')
const router = express.Router
const route = router()

//short of above three line const route = require(express).Router()

let teachers = [
    { name: 'Prateek', subject: 'maths' },
    { name: 'Varun', subject: 'science' }
]

route.get('/', function (req, res, next) {
    res.send(teachers)
})
route.get('/add', function (req, res, next) {
    teachers.push(
        {
            name:req.query.name ,
            subject:req.query.subject
        }
    )
    res.send(teachers)
})
//params basically fetch data from client side
route.get('/:id', function (req, res, next) {
    res.send(teachers[req.params.id])
})


module.exports = route

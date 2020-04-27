const user = require('../../db').userdata  //acquired user class from db.js
const route = require('express').Router()

route.get('/', (req, res) => {
    //display all user info
    user.findAll()
        .then((user) => {
            res.status(200).send(user)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not retrieve user" })
        })
})

route.post('/', (req, res) => {
    //add new user
    user.create({
        
        name: req.body.name,
        age:parseInt(req.body.age),
        gender: req.body.gender,
        phone:parseInt( req.body.phone),
        mail: req.body.mail

    })
    .then((user) => {
        res.status(201).send(user)
    })
    .catch((err) => {
        res.status(501).send({ error: "could not add new user" })
    })


})




exports = module.exports = route
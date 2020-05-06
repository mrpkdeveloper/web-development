const user = require('../../db').users   //this statement access user class from db.js to user 
const route = require('express').Router()


route.get('/', (req, res) => {
    //we want to send all users as an array from our databse

    user.findAll()               //this will get all the data from user table and pass to then
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retrieve user"

            })
        })

})

route.post('/', (req, res) => {
    //we except here that req will contain name in this
    //so we will create a new user here 

    user.create({
        name: req.body.name
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(501).send({
                error: "could not able to add new user"
            })
        })

})

exports = module.exports = route
const user = require('../../db').userdata
const route = require('express').Router()

route.get('/', (req, res) => {
    //get all products
    user.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not find users" })
        })
})
route.post('/', (req, res) => {
    //add new products

    if (isNaN((req.body.age))) {
        return res.status(403).send({
            error: "age is not a valid number"
        })
    }
    user.create({
        name: req.body.name,
        age: parseInt(req.body.age),
        gender: req.body.gender,
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(501).send({ error: "could not add new users" })
        })
})

exports = module.exports = route
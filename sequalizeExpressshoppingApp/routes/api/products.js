const product = require('../../db').products
const route = require('express').Router()

route.get('/', (req, res) => {
    //get all products
    product.findAll()
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not find products" })
        })
})
route.post('/', (req, res) => {
    //add new products
     
    if(isNaN((req.body.price))){
         return res.status(403).send({
             error:"price is not a valid number"
         })
    }

    product.create({
        name : req.body.name,
        price : parseFloat(req.body.price),
        manufacturer : req.body.manufacturer

    })
    .then((product) => {
        res.status(201).send(product)
    })
    .catch((err) => {
        res.status(501).send({ error: "could not add new products" })
    })
})

exports = module.exports = route
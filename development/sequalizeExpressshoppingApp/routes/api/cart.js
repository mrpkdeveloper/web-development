const cart = require('../../db').cart
const route = require('express').Router()


route.post('/',(req,res)=>{
    cart.create({
        name : req.body.name,
        price : parseFloat(req.body.price),
        manufacturer : req.body.manufacturer

    })
    .then((cart) => {
        res.status(201).send(cart)
    })
    .catch((err) => {
        res.status(501).send({ error: "product not added to cart" })
    })
})

route.get('/', (req, res) => {
    //get all products
    cart.findAll()
        .then((cart) => {
            res.status(200).send(cart)
        })
        .catch((err) => {
            res.status(500).send({ error: "could not find any products in cart" })
        })
})

exports = module.exports = route
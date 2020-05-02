const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("visible to only logged user")
})

exports = module.exports = route 
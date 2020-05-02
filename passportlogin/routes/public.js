const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("visible to all")
})



exports = module.exports = route 
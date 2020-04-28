const route = require('express').Router()

route.use('/user', require('./user'))
exports = module.exports =
    { route }
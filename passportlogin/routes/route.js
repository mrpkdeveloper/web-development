const route = require('express').Router()

route.get('/login', (req, res) => {
    res.render('login')  //file name67
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/login', (req, res) => {
    res.render('login')
})

route.post('/signup', (req, res) => {
    res.render('login')
})

exports = module.exports = route 
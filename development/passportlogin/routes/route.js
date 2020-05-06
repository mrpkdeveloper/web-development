const route = require('express').Router()
const user = require('../db').user
const passport = require('../passport')

route.get('/login', (req, res) => {
    res.render('login')  //file name
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.post('/signup', (req, res) => {
    user.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname

    }).then((createduser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route 
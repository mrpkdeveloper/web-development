const route = require('express').Router()
const user = require('../db').user

route.get('/login', (req, res) => {
    res.render('login')  //file name
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/login', (req, res) => {
    user.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            return res.send("not a user")
        }
        if (user.password != req.body.password) {
            return res.send("incorrect password")
        }
        return res.send("hello " + user.firstname)
    })
})

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
const route = require('express').Router()
const db = require('../db')


route.get('/', (req, res) => {

    db.getallperson()
        .then((persons) => {

            res.render('persons', { persons })   // this line render persons.hbs file with following fake 

        })

        .catch((err) => {
            res.send(err)
        })
})



route.get('/add', (req, res) => {
    res.render('persons_add')
})
route.get('/show', (req, res) => {
    res.render('persons_show')
})

route.post('/add', (req, res) => {
    db.addpersons(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })

})

route.post('/show', (req, res) => {
    db.get(req.body.name)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })

})

exports = module.exports = {
    route
}
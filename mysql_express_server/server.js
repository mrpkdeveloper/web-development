const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
app.set('views', __dirname + "/views")

app.get('/', (req, res) => {

    db.getallperson()
        .then((persons) => {

            res.render('persons', { persons })   // this line render persons.hbs file with following fake 

        })

        .catch((err) => {
            res.send(err)
        })
})



app.get('/add', (req, res) => {
    res.render('persons_add')
})
app.get('/show', (req, res) => {
    res.render('persons_show')
})

app.post('/add', (req, res) => {
    db.addpersons(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })

})

app.post('/show', (req, res) => {
    db.get(req.body.name)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })

})

app.listen(4231)

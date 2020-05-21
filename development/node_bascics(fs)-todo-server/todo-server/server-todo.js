const express = require('express')
const app = express()
const pushitem = require('./todo').pushitem


app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html')

})

app.get('/add', (req, res) => {
    console.log(req.query)
    pushitem(req.query.task)
    res.redirect('/')
})
app.listen(4444)
const express = require('express')
const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({ extended: true }))

const list_srv = require('./routes/list') 

srv.use('/todos', list_srv)
// srv.use('/public', express.static(__dirname + "/public")) 

srv.use(function (req, res, next) {
    res.send("<h2>404 Page Not Found</h2>")
})


srv.listen(1212)
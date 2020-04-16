const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.set('view engine', 'hbs')
app.set('views',__dirname + "/views")

app.get('/', (req, res) => {
    res.render('persons', {                                        // this line render persons.hbs file with following fake data
        persons: [
            { name: "aditya", age: 13, city: "delhi" },
            { name: "bhavy", age: 14, city: "bhopal" }
        ]
    })
})

app.listen(4231)

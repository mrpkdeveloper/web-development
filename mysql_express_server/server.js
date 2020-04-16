const express = require('express');
const app = express();

app.use(express)
app.use(express.urlencoded({ extended: true }))
app.set("veiw engine", "hbs")

app.get('/', (req, res) => {
    res.render('persons', {                                        // this line render persons.hbs file with following fake data
        persons: [
            { name: 'aditya', age: 13, city: 'delhi' },
            { name: 'bhavy', age: 14, city: 'bhopal' }
        ]
    })
})

app.listen(4444, () => {
    console.log('server started on http://locolhost:4444/')
})

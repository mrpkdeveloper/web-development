const fs = require('fs')

fs.readFile(__dirname + '/mytext.txt', function (err, data) {
    if (err) throw err
    console.log(data.toString())
})
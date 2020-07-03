const fs = require('fs')

fs.writeFile(__dirname + "/mytext.txt", "hello this is some random text", function (err) {
    if (err) throw err
    console.log("file was written")
})
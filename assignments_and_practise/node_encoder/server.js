const express = require('express')
const app = express()

// app.get("/", (req, res) => {
// res.send("hello world")
// })
app.use("/", express.static(__dirname + "/public"))

function basedecoder(req, res, next) {
    for (let q in req.query) {
        console.log(req.query[q])
    }
    next()
}

app.get("/msg", basedecoder, (req, res) => {
    res.send("final result")
})


app.listen(1212, () => { console.log("server started at http://localhost:1212") })
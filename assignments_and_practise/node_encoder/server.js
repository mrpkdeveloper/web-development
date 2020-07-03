const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(1212, () => { console.log("server started at http://localhost:1212") })
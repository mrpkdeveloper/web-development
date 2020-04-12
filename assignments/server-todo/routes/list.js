const express = require('express')
const router = express.Router
const route = router()
module.exports = route

let list = [
    { task: "eat", status: "done" },
    { task: "study", status: "notdone" },
    { task: "listen_music", status: "done" },
    { task: "go_out", status: "notdone" }
]

route.get('/', (req, res) => {
    res.send(list);
})

route.get('/:id', (req, res) => {
    res.send(list[req.params.id])
})

route.post('/', (req, res) => {
    list.push({
        task: req.body.task,
        status: req.body.status
    })
    res.send(list)
})

route.delete('/:id', (req, res) => {
    delete list[req.params.id]
    res.send(list)
})

route.patch('/:id', (req, res) => {
    list[req.params.id] = { task: req.body.task, status: req.body.status }
    res.send(list)
})
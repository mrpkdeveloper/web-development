let todos = [
    'first task',
    'second task'
]
function pushitem(item) {
    todos.push(item)
}

function createlistitem(task) {
    return $(`<li>${task}</li>`)

}

exports = module.exports = {
    pushitem
}